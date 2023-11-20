import Modal from "./Modal";
import Head from 'next/head'
import { contactLinks } from "../utils/contactLinks";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Modal></Modal>

      <Head>
      <title>Gregorio V. | Portafolio </title>
      </Head>

      <main style={{overflow: "hidden"}}>{children}</main>
      <footer>
        <p>
          Hecho y diseñado por Gregorio Vargas M. {new Date().getFullYear().toString()}{" "} ©
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
