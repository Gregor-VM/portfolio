import styles from "../styles/Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <form>
        <h2>Contáctame</h2>
        <label htmlFor={"email"}>Email</label>
        <input
          type="email"
          id="email"
          placeholder="Introduce tu email..."
        ></input>
        <label htmlFor={"content"}>Contenido</label>
        <textarea placeholder="Escribe..." id="content" rows={7}></textarea>
        <button type="submit" onClick={(e) => e.preventDefault()}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
