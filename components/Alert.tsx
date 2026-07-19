import { useEffect, type Dispatch, type SetStateAction } from "react";

export type AlertVariant = "success" | "danger";

interface AlertProps {
  show: boolean;
  msg: string;
  variant?: AlertVariant;
  setShow: Dispatch<SetStateAction<boolean>>;
}

function Alert({ show, msg, variant = "success", setShow }: AlertProps) {
  useEffect(() => {
    if (!show) return;

    const timer = window.setTimeout(() => setShow(false), 3000);
    return () => window.clearTimeout(timer);
  }, [setShow, show]);

  return (
    <div
      className={`alert alert--${variant} ${
        show ? "alert--show" : "alert--hidden"
      }`}
      role="status"
    >
      {msg}
    </div>
  );
}

export default Alert;
