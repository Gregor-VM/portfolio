import { useTranslation } from "next-i18next/pages";

import styles from "./LinkButton.module.scss";

interface LinkButtonProps {
  url: string;
  label: string;
  icon?: string;
  variant?: "primary" | "white" | "inverted";
}

function LinkButton({
  url,
  label,
  icon,
  variant = "primary",
}: LinkButtonProps) {
  const { t } = useTranslation("index");

  return (
    <a
      className={`${styles.linkButton} ${styles[`linkButton--${variant}`]}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {t(label)}
      {icon ? <i className={`${icon} iconRight`} aria-hidden="true" /> : null}
    </a>
  );
}

export default LinkButton;
