import type { MouseEventHandler } from "react";
import { useTranslation } from "next-i18next/pages";

import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

function Button({
  label,
  onClick,
  icon,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const { t } = useTranslation("index");

  return (
    <button
      disabled={disabled}
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {t(label)}
      {icon ? <i className={`${icon} iconRight`} aria-hidden="true" /> : null}
    </button>
  );
}

export default Button;
