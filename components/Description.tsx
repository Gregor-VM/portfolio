import React from "react";
import styles from "./../styles/Description.module.scss";

function Description({ handleSetRef }) {
  const ids = ["projects", "skills", "github", "contact"];

  const now = new Date();
  const yearNow = now.getFullYear();
  const birth = new Date(`${yearNow}-11-29`);
  let age: string;

  if(birth < now) age = (yearNow+"").substr(2);
  else age = ((yearNow - 1)+"").substr(2);

  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2 className={styles.headingText}>
          Hola, soy Gregorio Vargas Marrero
        </h2>
        <p className={styles.subtitleText}>
          Soy Front-end Developer tengo {age} años, soy de República Dominicana y
          me especializo en utilizar tecnologías como HTML, CSS, Javascript,
          React, entre otras. Programar es mi pasión y me gusta aprender más en
          mi dia a dia.
        </p>
        <div>
          <a href="cv_gvm.pdf" target="_blank">
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
