import { useState, FormEvent, useRef } from "react";
import styles from "../styles/Contact.module.scss";
import { send } from "emailjs-com";

import Alert from "./Alert";

import useScrollRefProp from "../hooks/useScrollRefProp";

function Contact({ currentRef, handleSetRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [msg, setMsg] = useState({ msg: "", variant: "" });

  const handleClose = () => {
    setMsg({ msg: "", variant: "" });
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setMsg({ msg: "Algún campo está vacio", variant: "danger" });
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
          msg: "El mensaje ha sido enviado correctamente",
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
      <form onSubmit={handleSend}>
        <h2>
          Contáctame<i className="far fa-envelope"></i>
        </h2>

        <label htmlFor={"name"}>Nombre</label>
        <input
          onChange={({ target: { value } }) => setName(value)}
          type="text"
          id="name"
          placeholder="Introduce tu nombre..."
        ></input>
        <label htmlFor={"email"}>Email</label>
        <input
          onChange={({ target: { value } }) => setEmail(value)}
          type="email"
          id="email"
          placeholder="Introduce tu email..."
        ></input>
        <label htmlFor={"message"}>Mensaje</label>
        <textarea
          onChange={({ target: { value } }) => setMessage(value)}
          placeholder="Escribe tu mensaje..."
          id="message"
          rows={10}
        ></textarea>
        <Alert msg={msg.msg} variant={msg.variant} handleClose={handleClose} />
        <button type="submit">Enviar</button>
      </form>
      <img src="/contact.svg"></img>
    </div>
  );
}

export default Contact;
