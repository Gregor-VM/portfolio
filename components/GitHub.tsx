import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/GitHub.module.scss";

import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

function GitHub({ currentRef, handleSetRef }) {

  const { t } = useTranslation('index');

  const user: User = useSelector((state) => state["user"].user);
  const ref: React.LegacyRef<HTMLHeadingElement> = useRef();
  useScrollRefProp(ref, handleSetRef, currentRef, "github");

  const {observeRef, isVisible} = isElementVisible(0.25);

  return (
    <div ref={observeRef} className={`${styles.container} ${isVisible ? styles.appear : ""}`}>
      <h1 ref={ref}>
        GitHub <i className="fab fa-github"></i>
      </h1>
      <div className={styles.versionSvg}>
        <img src="/version.svg"></img>
      </div>
      <div className={styles.profile}>
        <div className={styles.float}>
          <img src={user.avatar_url} className={styles.avatar}></img>
          <img className={styles.shadow}></img>
        </div>
        <h2>{user.name}</h2>
        <small>Username: {user.login}</small>
        <p>{user.public_repos} {t("currentRepos")}</p>
        <a href={user.html_url}>
          <span>{t("goGitHub")}</span> <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default GitHub;
