import isDay from "../hooks/isDay";
import styles from "./../styles/Description.module.scss";
import Model from './Model';
import { useTranslation } from "next-i18next/pages";
import { useRouter } from "next/router";
import LinkButton from "../common/LinkButton/LinkButton";
import Button from "../common/Button/Button";

function Description() {

  const { t } = useTranslation('index');
  const router = useRouter();
  const locale = router.locale ?? "en";

  const animatedText = t("greetings")
    .split("")
    .map((letter, index) => (
      <span key={`${letter}-${index}`} className={styles[`animatedLetter-${index + 1}`]}>
        {letter}
      </span>
    ));

  const scrollToContact = () => {
    void router.push("#contact");
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
