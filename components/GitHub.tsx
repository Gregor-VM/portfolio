import { useRef } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/GitHub.module.scss";

import useScrollRefProp from "../hooks/useScrollRefProp";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

function GitHub({ currentRef, handleSetRef }) {
  const user: User = useSelector((state) => state["user"].user);
  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  useScrollRefProp(ref, handleSetRef, currentRef, "github");

  return (
    <div className={styles.container} ref={ref}>
      <h1>
        GitHub <i className="fab fa-github"></i>
      </h1>
      <div>
        <img src={user.avatar_url}></img>
        <h2>{user.name}</h2>
        <small>Username: {user.login}</small>
        <p>{user.public_repos} repositorios creados actualmente</p>
        <a href={user.html_url}>
          <span>Ir al GitHub</span> <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default GitHub;
