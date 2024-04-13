import { useRef } from "react";
import styles from "../styles/Skills.module.scss";
import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";

function Skills({ currentRef, handleSetRef }) {

  const { t } = useTranslation('index');

  const {observeRef, isVisible} = isElementVisible();

  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  const scroll = useScrollRefProp(ref, handleSetRef, currentRef, "skills");

  return (
    <div className={styles.container} ref={ref}>
      <h2>
        {t("skills")} <i className="fas fa-laptop-code"></i>
      </h2>
      <div ref={observeRef} className={isVisible ? styles.appear : ""}>
        <i className="fab fa-html5" title="HTML"></i>
        <i className="fab fa-css3-alt" title="CSS"></i>
        <i className="fab fa-js-square" title="JAVASCRIPT"></i>
        <i className="fab fa-react" title="REACT"></i>
        <i className="fab fa-angular" title="ANGULAR"></i>
        <i className="fab fa-git" title="GIT"></i>
        <i className="fab fa-github" title="GITHUB"></i>
        <i className="fab fa-sass" title="SASS"></i>
        <i className="fab fa-bootstrap" title="BOOTSTRAP"></i>
        <i className="fab fa-node-js" title="NODEJS"></i>
        <img src="/mongodb_icon.png" title="MONGODB" height="140px" width="140px" />
        <img src="/typescript_icon.png" title="TYPESCRIPT" height="140px" width="140px" />
      </div>
    </div>
  );
}

export default Skills;
