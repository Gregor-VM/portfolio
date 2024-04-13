import React, {useMemo} from "react";
import isDay from "../hooks/isDay";
import styles from "./../styles/Description.module.scss";
import Model from './Model';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Description({ handleSetRef }) {

  const { t } = useTranslation('index');
  const { locale } = useRouter();

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

    return createAnimatedText(t("greetings"));

  }, []);



  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h2 className={styles.headingText}>
          {animatedText}
        </h2>
        <p className={isDay() ? "" : styles.nightBackground}>
          {t("resume")}
        </p>
        <div className={styles.buttonsContainer}>
          <a href={`cv_gvm_${locale}.pdf`} target="_blank">
            {t("downloadCV")}
            <i className="fas fa-external-link-alt"></i>
          </a>
          <button onClick={() => handleSetRef(ids[3])}>
            {t("contactMe")}
            <i className="far fa-envelope"></i>
          </button>
        </div>
      </div>

      <div className={styles.model}><Model /></div>
    </div>
  );
}

export default Description;
