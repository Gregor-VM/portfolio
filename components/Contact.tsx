import styles from "../styles/Contact.module.scss";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";
import { PageSectionEnum } from "../utils/sections";
import { ScrollableSection } from "./ScrollableSection";
import ImageWithLines from "../common/ImageWithLines/ImageWithLines";
import { send } from "emailjs-com";
import { FormEvent, useMemo, useState } from "react";
import Button from "../common/Button/Button";
import Alert from "./Alert";

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function Contact() {

  const { t } = useTranslation('index');
  //const {observeRef, isVisible} = isElementVisible();

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [variant, setVariant] = useState("success");
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validEmail = useMemo(() => {
    return validateEmail(email)
  }, [email]);

  const disabled = useMemo(() => {
    return name.trim() === "" || email.trim() === "" || message.trim() === "" || validEmail === null
  }, [name, email, message, validEmail]);

  const showMessage = (content, variant = "success") => {
    setShow(true);
    setVariant(variant);
    setMsg(content);
  }

  const handleSend = (e: FormEvent) => {
    
    e.preventDefault();

    setLoading(true);

    send(
      "service_byjqu3e",
      "template_29sbw9z",
      { from_name: name, from_email: email, message: message, reply_to: email },
      "rregi8KxQHn7j9ij4"
    )
      .then(() => {
        showMessage(t("msgSent"));
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        showMessage(t("msgError"), "danger");
      })
      .finally(() => {
        setLoading(false);
      })
      
  };

  return (
    <>
    
    <ScrollableSection id={PageSectionEnum.CONTACT}>
      <section className="section section--topClipped">
        <div className="section__background section__background--white">
          <div className="doubleBg">

            <img src="./contact-top.svg" />
            <img src="./contact-bottom.svg" />

          </div>
        </div>

        <div className="container">

        <div className={styles["contact"]}>

          <div className={`${styles["contact__main"]} linesImage`}>
            <div className={styles["contact__title"]}>
              <h2>{t("contactMe")}</h2>
              <i className="far fa-envelope"></i>
            </div>

            <div className={styles["contact__form"]}>

            <form autoComplete="off" onSubmit={handleSend}>
              <input
                onChange={({ target: { value } }) => setName(value)}
                type="text"
                id="name"
                placeholder={t("namePlaceholder")}
              ></input>
              <input
                onChange={({ target: { value } }) => setEmail(value)}
                type="email"
                id="email"
                placeholder={t("emailPlaceholder")}
                style={{borderColor: (!validEmail && email !== "") ? "#e74c3c" : null}}
              ></input>
              <textarea
                onChange={({ target: { value } }) => setMessage(value)}
                placeholder={t("msgPlaceholder")}
                id="message"
                rows={10}
              ></textarea>
              <div className={styles["contact__form__button"]}>
                <Button disabled={disabled || loading} type="submit" label={t("send")} icon="fas fa-paper-plane" />
              </div>
            </form>

            </div>

            <div className="linesEffect">
              <div className="linesEffect__1"></div>
              <div className="linesEffect__2"></div>
              <div className="linesEffect__3"></div>
            </div>

          </div>

          <ImageWithLines url="/contact.svg"></ImageWithLines>

        </div>

        </div>
      </section>
    </ScrollableSection>

    <Alert show={show} msg={msg} setShow={setShow} variant={variant} />
    
    </>
  );
}

export default Contact;