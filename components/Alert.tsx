import { useEffect, useRef } from "react";

function Alert({ show, msg, variant = "success", setShow }) {

  const timerRef = useRef<any>();

  useEffect(() => {

    if(show && !timerRef.current) {
      timerRef.current = setTimeout(() => {
        setShow(false);
        timerRef.current = null;
      }, 3000);
    }

    return () => {
      clearTimeout(timerRef.current);
    }

  }, [show]);

  return (
    <div className={`alert alert--${variant} ${show ? "alert--show" : "alert--hidden"}`}>
      {msg}
    </div>
  );
}

export default Alert;
