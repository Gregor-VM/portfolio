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
}

export default NavBar;
