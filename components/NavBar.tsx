import { useRef, LegacyRef } from "react";
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
            Front-end Developer - Construyo la parte visual de las páginas web
            con tecnologías como HTML, CSS, JS, React y muchas más. Estoy
            disponible para un trabajo de tipo parcial o puedes contarme
            cualquier proyecto que tengas en mente.
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
