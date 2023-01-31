//import Image from "next/image";
//import styles from "../styles/Home.module.scss";
import { useState } from "react";
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
        >
          <li>PROYECTOS</li>
        </a>
        <a
          className={selected === 1 ? styles.selected : ""}
          href="#"
          onClick={(e) => {
            selectItem(1);
          }}
        >
          <li>HABILIDADES</li>
        </a>
        <a
          className={selected === 2 ? styles.selected : ""}
          href="#"
          onClick={(e) => {
            selectItem(2);
          }}
        >
          <li>GITHUB</li>
        </a>
        <a
          className={selected === 3 ? styles.selected : ""}
          href="#"
          onClick={(e) => {
            selectItem(3);
          }}
        >
          <li>CONTÁCTO</li>
        </a>
      </ul>

    </nav>

  );
}

export default NavBar;
