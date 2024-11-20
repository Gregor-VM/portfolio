import LinkButton from "../common/LinkButton/LinkButton";
import { contactLinks } from "../utils/contactLinks";
import { useTranslation } from "next-i18next";
import styles from "../styles/Footer.module.scss";

function Footer() {
  const { t } = useTranslation('index');
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div className={styles["footer__info"]}>
          <h2>{t("madeBy")} Gregorio Vargas M. {new Date().getFullYear().toString()}</h2>
          <h3>{t("attributions")}</h3>
          <h4>
            <ul>
              <li><a href="https://sketchfab.com/models/c140fa7e825f40dd9dfcfe1a210c0058/embed" target="_blank">Sopwith PUP Stylized - Cupido</a> {t("by")} <a href="https://sketchfab.com/meesjevanhout" target="_blank">meesvanhout</a> {t("on")} <a href="https://www.sketchfab.com/" target="_blank">Sketchfab</a></li>
            </ul>
          </h4>
        </div>
        <div className={styles["footer__contact"]}>

          <div className={styles["footer__contact__button"]}>
            <LinkButton variant="white" url={'mailto:'+contactLinks.email} label={t("sendEmail")} icon="fas fa-paper-plane" ></LinkButton>
          </div>
          <h4>{t("followMySocials")}</h4>
          <div className={styles["footer__contact__socials"]}>
            <a href={contactLinks.linkedin} target="_blank">
              <i className="fab fa-linkedin" title="LINKEDIN"></i>
            </a>
            <a href={contactLinks.github} target="_blank">
              <i className="fab fa-github" title="GITHUB"></i>
            </a>
            <a href={contactLinks.whatsapp} target="_blank">
              <i className="fab fa-whatsapp" title="WHATSAPP"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer






/*import { contactLinks } from "../utils/contactLinks";
import { useTranslation } from "next-i18next";

function Footer() {

  const { t } = useTranslation('index');

  return (<footer>
    <div className="footerFirst">
      <p>
        {t("madeBy")} Gregorio Vargas M. {new Date().getFullYear().toString()}{" "} ©
      </p>
      <div>
        <a className="email" title="EMAIL" href={'mailto:'+contactLinks.email}>{contactLinks.email}</a>
        <div>
          <a href={contactLinks.linkedin} target="_blank">
            <i className="fab fa-linkedin" title="LINKEDIN"></i>
          </a>
          <a href={contactLinks.github} target="_blank">
            <i className="fab fa-github" title="GITHUB"></i>
          </a>
          <a href={contactLinks.whatsapp} target="_blank">
            <i className="fab fa-whatsapp" title="WHATSAPP"></i>
          </a>
        </div>
      </div>
    </div>
    <div style={{opacity: .8}}>
      <h5>- {t("attributions")}</h5>
      <p style={{fontSize: "14px"}}><a href="https://sketchfab.com/models/c140fa7e825f40dd9dfcfe1a210c0058/embed" target="_blank">Sopwith PUP Stylized - Cupido</a> {t("by")} <a href="https://sketchfab.com/meesjevanhout" target="_blank">meesvanhout</a> {t("on")} <a href="https://www.sketchfab.com/" target="_blank">Sketchfab</a></p>
    </div>
  </footer>);
}

export default Footer;
*/