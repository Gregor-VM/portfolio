//import Image from "next/image";
//import styles from "../styles/Home.module.scss";
import { useState } from "react";
import styles from "../styles/NavBar.module.scss";

function NavBar({ handleSetRef }) {
  const handleScroll = () => {
    handleSetRef("projects");
  };
  const [selected, setSelected] = useState(0);
  const ids = ["projects", "skills", "github", "contact"];

  const selectItem = (index: number) => {
    handleSetRef(ids[index]);
    setSelected(index);
  };

  return (
    <nav className={styles.nav}>
      <div>
        <i className="fas fa-user-tie"></i>
        <div>Portafolio</div>
      </div>
      <ul className={styles.list}>
        <a
          className={selected === 0 ? styles.selected : ""}
          href="#"
          onClick={(e) => {
            selectItem(0);
          }}
        >
          <li className={styles.show7}>Proyectos</li>
        </a>
        <a
          className={selected === 1 && styles.selected}
          href="#"
          onClick={(e) => {
            selectItem(1);
          }}
        >
          <li className={styles.show8}>Habilidades</li>
        </a>
        <a
          className={selected === 2 && styles.selected}
          href="#"
          onClick={(e) => {
            selectItem(2);
          }}
        >
          <li className={styles.show9}>GitHub</li>
        </a>
        <a
          className={selected === 3 && styles.selected}
          href="#"
          onClick={(e) => {
            selectItem(3);
          }}
        >
          <li className={styles.show10}>Contácto</li>
        </a>
      </ul>
    </nav>
  );

  /*

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
  */
}

export default NavBar;
