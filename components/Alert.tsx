import styles from "../styles/Alert.module.scss";

function Alert({ msg, variant, handleClose }) {
  if (msg !== "" && variant !== "") {
    return (
      <div className={styles[variant]}>
        <p style={{whiteSpace: "nowrap"}}>{msg}</p>
        <i className="fas fa-times" onClick={handleClose}></i>
      </div>
    );
  }
  return <></>;
}

export default Alert;
