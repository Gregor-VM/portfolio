import Image from "next/image";
import styles from "../styles/Home.module.scss";

function NavBar({ handleSetRef }) {
  const handleScroll = () => {
    handleSetRef("projects");
  };
  return (
    <>
      <header className={styles.navbar}>
        <div>
          <h2 className={styles.headingText + " " + styles.show1}>
            Hola, soy Gregorio Vargas Marrero
          </h2>
          <h4 className={styles.subtitleText}>
            <span className={styles.show2}>
              Soy Front-end Developer tengo 20 años, soy de República{" "}
            </span>
            <span className={styles.show3}>
              Dominicana y me especializo en utilizar tecnologías como HTML,
            </span>{" "}
            <span className={styles.show4}>
              CSS, Javascript, React, entre otras. Programar es mi pasión y me
              gusta{" "}
            </span>
            <span className={styles.show5}>aprender más en mi dia a dia.</span>
          </h4>
          <span className={styles.show6}>
            <i className="fas fa-chevron-down" onClick={handleScroll}></i>
          </span>
        </div>

        <nav className={styles.mt}>
          <ul className={styles.bar}>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("projects");
              }}
            >
              <li className={styles.show7}>Proyectos</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("skills");
              }}
            >
              <li className={styles.show8}>Habilidades</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("github");
              }}
            >
              <li className={styles.show9}>GitHub</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("contact");
              }}
            >
              <li className={styles.show10}>Contácto</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
