import styles from "../styles/Home.module.scss";

function NavBar() {
  return (
    <>
      <header className={styles.navbar}>
        <h2 className={styles.headingText}>Gregorio Vargas M.</h2>
        <h4 className={styles.subtitleText}>Fronted Developer</h4>

        <nav className={styles.mt}>
          <ul className={styles.bar}>
            <a href="#projects">
              <li>Proyectos</li>
            </a>
            <a href="#skills">
              <li>Habilidades</li>
            </a>
            <a href="#github">
              <li>GitHub</li>
            </a>
            <a href="#contact">
              <li>Contácto</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
