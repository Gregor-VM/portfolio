import { useState, FormEvent, useRef } from "react";
import styles from "../styles/Contact.module.scss";
import { send } from "emailjs-com";

import Alert from "./Alert";

import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";

function Contact({ currentRef, handleSetRef }) {

  const { t } = useTranslation('index');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [msg, setMsg] = useState({ msg: "", variant: "" });

  const {observeRef, isVisible} = isElementVisible(0);

  const handleClose = () => {
    setMsg({ msg: "", variant: "" });
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setMsg({ msg: t("errorEmpty"), variant: "danger" });
      return null;
    }

    send(
      "service_t9rl34k",
      "template_enm53jb",
      { from_name: name, from_email: email, message: message, reply_to: email },
      "user_049IC7PBPhXgCRkIsj5iT"
    )
      .then(() => {
        setMsg({
          msg: t("msgSent"),
          variant: "green",
        });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setMsg({ msg: "", variant: "" });
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  useScrollRefProp(ref, handleSetRef, currentRef, "contact");

  return (
    <div className={styles.container} ref={ref}>
      <form ref={observeRef} onSubmit={handleSend} className={isVisible ? styles.appear : ""}>
        <h2>
          {t("contactMe")}<i className="far fa-envelope"></i>
        </h2>

        <label htmlFor={"name"}>{t("name")}</label>
        <input
          onChange={({ target: { value } }) => setName(value)}
          type="text"
          id="name"
          placeholder={t("namePlaceholder")}
        ></input>
        <label htmlFor={"email"}>{t("email")}</label>
        <input
          onChange={({ target: { value } }) => setEmail(value)}
          type="email"
          id="email"
          placeholder={t("emailPlaceholder")}
        ></input>
        <label htmlFor={"message"}>{t("msg")}</label>
        <textarea
          onChange={({ target: { value } }) => setMessage(value)}
          placeholder={t("msgPlaceholder")}
          id="message"
          rows={10}
        ></textarea>
        <Alert msg={msg.msg} variant={msg.variant} handleClose={handleClose} />
        <button type="submit">{t("send")}</button>
      </form>
      <img src="/contact.svg"></img>
    </div>
  );
}

export default Contact;
