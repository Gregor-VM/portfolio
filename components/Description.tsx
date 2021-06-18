import React from "react";
import styles from "./../styles/Description.module.scss";

function Description({ handleSetRef }) {
  const ids = ["projects", "skills", "github", "contact"];
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2 className={styles.headingText}>
          Hola, soy Gregorio Vargas Marrero
        </h2>
        <p className={styles.subtitleText}>
          Soy Front-end Developer tengo 20 años, soy de República Dominicana y
          me especializo en utilizar tecnologías como HTML, CSS, Javascript,
          React, entre otras. Programar es mi pasión y me gusta aprender más en
          mi dia a dia.
        </p>
        <div>
          <a href="cv_gregorio_vargas_m.pdf" target="_blank">
            Descargar CV
          </a>
          <button onClick={() => handleSetRef(ids[3])}>Contáctame</button>
        </div>
      </div>

      <div className={styles.bg}></div>
    </div>
  );
}

export default Description;
