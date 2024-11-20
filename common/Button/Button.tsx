import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from './Button.module.scss';

enum ButtonType {
  "button",
  "submit"
}

function Button({label, onClick, icon = null, type = "button", disabled = false}: {
  label: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, icon?: string, type?: keyof typeof ButtonType, disabled?: boolean
}) {
    const { t } = useTranslation('index');
  return (<button disabled={disabled} type={type} className={styles.button} onClick={onClick}>
    {t(label)}
    {icon ? <i className={`${icon} iconRight`}></i> : null}
  </button>)
}

export default Button