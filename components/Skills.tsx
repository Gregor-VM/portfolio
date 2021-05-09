import styles from "../styles/Skills.module.scss";

function Skills() {
  return (
    <div className={styles.container}>
      <h2 id="skills">Habilidades</h2>
      <div>
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt"></i>
        <i className="fab fa-js-square"></i>
        <i className="fab fa-react"></i>
        <i className="fab fa-git"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-bootstrap"></i>
      </div>
    </div>
  );
}

export default Skills;
