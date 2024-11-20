import { useTranslation } from 'next-i18next';
import React from 'react';
import styles from './LinkButton.module.scss';

enum VariantEnum {
  "primary",
  "white",
  "inverted"
}

function LinkButton({url, label, icon = null, variant = "primary"}: {
  url: string, label: string, icon?: string, variant?: keyof typeof VariantEnum
}) {
  const { t } = useTranslation('index');
  return (
    <a className={`${styles.linkButton} ${styles["linkButton--" + variant]}`} href={url} target="_blank">
        {t(label)}
        {icon ? <i className={`${icon} iconRight`}></i> : null}
    </a>
  )
}

export default LinkButton