import Modal from "./Modal";
import Head from 'next/head'
import { contactLinks } from "../utils/contactLinks";
import { useTranslation } from "next-i18next";

function Layout({ children }: { children: React.ReactNode }) {

  const { t } = useTranslation('index');

  return (
    <>
    <Modal></Modal>

      <Head>
      <title>Gregorio V. | {t("portfolio")} </title>
      </Head>

      <main style={{overflow: "hidden"}}>{children}</main>
      <footer>
        <p>
          {t("madeBy")} Gregorio Vargas M. {new Date().getFullYear().toString()}{" "} ©
        </p>
        <div>
          <a className="email" title="EMAIL" href={'mailto:'+contactLinks.email}>{contactLinks.email}</a>
          <div>
            <a href={contactLinks.linkedin} target="_blank">
              <i className="fab fa-linkedin" title="LINKEDIN"></i>
            </a>
            <a href={contactLinks.github} target="_blank">
              <i className="fab fa-github" title="GITHUB"></i>
            </a>
            <a href={contactLinks.whatsapp} target="_blank">
              <i className="fab fa-whatsapp" title="WHATSAPP"></i>
            </a>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Layout;
