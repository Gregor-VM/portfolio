import React, {useMemo} from "react";
import styles from "./../styles/Description.module.scss";
import Model from './Model';

function Description({ handleSetRef }) {
  const ids = ["projects", "skills", "github", "contact"];

  let age: string = useMemo(() => {
    const now = new Date();
    const yearNow = now.getFullYear();
    const birth = new Date(`${yearNow}-11-29`);
    if(birth < now) return (yearNow+"").substr(2);
    else return ((yearNow - 1)+"").substr(2);
  },[]);


  const animatedText = useMemo(() => {

    const createLetter = (letter, i) => {
      return <span key={i} className={styles['animatedLetter-'+(i+1)]}>{letter}</span>
    }

    const createAnimatedText = (text: string) => {
      return text.split("").map((letter, i) => createLetter(letter, i));
    };

    return createAnimatedText("Hola, soy Gregorio Vargas Marrero");

  }, []);



  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2 className={styles.headingText}>
          {animatedText}
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

      <div className={styles.model}><Model /></div>
      {/*<div className={styles.bg}></div>*/}
    </div>
  );
}

export default Description;
