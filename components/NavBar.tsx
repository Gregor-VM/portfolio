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
          <h2 className={styles.headingText}>Hola, soy Gregorio Vargas M.</h2>
          <h4 className={styles.subtitleText}>
            Soy Front-end Developer tengo 20 años, soy de República Dominicana y
            me especializo en utilizar tecnologías como HTML, CSS, Javascript,
            React, entre otras. Programar es mi pasión y me gusta aprender más
            en mi dia a dia.
          </h4>
          <i className="fas fa-chevron-down" onClick={handleScroll}></i>
        </div>

        <nav className={styles.mt}>
          <ul className={styles.bar}>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("projects");
              }}
            >
              <li>Proyectos</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("skills");
              }}
            >
              <li>Habilidades</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("github");
              }}
            >
              <li>GitHub</li>
            </a>
            <a
              href="#"
              onClick={(e) => {
                handleSetRef("contact");
              }}
            >
              <li>Contácto</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
