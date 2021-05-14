import { useRef } from "react";
import styles from "../styles/Skills.module.scss";
import useScrollRefProp from "../hooks/useScrollRefProp";

function Skills({ currentRef, handleSetRef }) {
  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  useScrollRefProp(ref, handleSetRef, currentRef, "skills");
  return (
    <div className={styles.container} ref={ref}>
      <h2>
        Habilidades <i className="fas fa-laptop-code"></i>
      </h2>
      <div>
        <i className="fab fa-html5" title="HTML"></i>
        <i className="fab fa-css3-alt" title="CSS"></i>
        <i className="fab fa-js-square" title="JAVASCRIPT"></i>
        <i className="fab fa-react" title="REACT"></i>
        <i className="fab fa-git" title="GIT"></i>
        <i className="fab fa-github" title="GITHUB"></i>
        <i className="fab fa-sass" title="SASS"></i>
        <i className="fab fa-bootstrap" title="BOOTSTRAP"></i>
      </div>
    </div>
  );
}

export default Skills;
