//import Image from "next/image";
//import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { Tooltip } from 'react-tooltip'
import isDay from "../hooks/isDay";
import styles from "../styles/NavBar.module.scss";

function NavBar({ handleSetRef }) {

  const night = !isDay();

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
      
      <div className={styles.navContainer}>
        <div>
          <div className={night ? styles.white : ""}>GREGOR<span className={styles.blue}>VM</span></div>
        </div>
        <ul className={`${night ? styles.white : ""} ${styles.list}`}>
          <a
            className={selected === 0 ? styles.selected : ""}
            href="#"
            onClick={(e) => {
              selectItem(0);
            }}
            data-tooltip-delay-show={250}
            data-tooltip-id="projects"
          >
            <li><i className="far fa-lightbulb"></i></li>
            <Tooltip id="projects" content="Proyectos" className={styles.tooltip} />
          </a>
          <a
            className={selected === 1 ? styles.selected : ""}
            href="#"
            onClick={(e) => {
              selectItem(1);
            }}
            data-tooltip-delay-show={250}
            data-tooltip-id="skills"
          >
            <li><i className="fas fa-laptop-code"></i></li>
            <Tooltip id="skills" content="Habilidades" className={styles.tooltip} />
          </a>
          <a
            className={selected === 2 ? styles.selected : ""}
            href="#"
            onClick={(e) => {
              selectItem(2);
            }}
            data-tooltip-delay-show={250}
            data-tooltip-id="github"
          >
            <li><i className="fab fa-github"></i></li>
            <Tooltip id="github" content="GitHub" className={styles.tooltip} />
          </a>
          <a
            className={selected === 3 ? styles.selected : ""}
            href="#"
            onClick={(e) => {
              selectItem(3);
            }}
            data-tooltip-delay-show={250}
            data-tooltip-id="contact"
          >
            <li><i className="fas fa-paper-plane"></i></li>
            <Tooltip id="contact" content="Contácto" className={styles.tooltip} />
          </a>
        </ul>
      </div>

    </nav>

  );
}

export default NavBar;
