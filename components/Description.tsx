import React, {useMemo} from "react";
import isDay from "../hooks/isDay";
import styles from "./../styles/Description.module.scss";
import Model from './Model';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import LinkButton from "../common/LinkButton/LinkButton";
import Button from "../common/Button/Button";

function Description() {

  const { t } = useTranslation('index');
  const { locale } = useRouter();

  const router = useRouter();

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

  const scrollToContact = () => {
    router.push("#contact")
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.model}><Model /></div>
    </div>
    <div className={styles.container}>
      <div className={styles.desktop}>
        <div className={styles.buttonsContainer}>
          <LinkButton url={`cv_gvm_${locale}.pdf`} label="downloadCV" icon="fas fa-external-link-alt" />
          <Button label="contactMe" onClick={scrollToContact} icon="far fa-envelope" />
        </div>
      </div>
    </div>

    <div className={styles.mobile}>

      <div className={styles.desc}>
        <h2 className={styles.headingText}>
          {animatedText}
        </h2>
        <p className={isDay() ? "" : styles.nightBackground}>
          {t("resume")}
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <LinkButton url={`cv_gvm_${locale}.pdf`} label="downloadCV" icon="fas fa-external-link-alt" />
        <Button label="contactMe" onClick={scrollToContact} icon="far fa-envelope" />
      </div>

    </div>
    </>
  );
}

export default Description;
