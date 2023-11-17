import Modal from "./Modal";
import Head from 'next/head'

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
          <a title="EMAIL" href="mailto:gregoriovargasmarrero@gmail.com">gregoriovargasmarrero@gmail.com</a>
          <div>
            <a href="https://www.linkedin.com/in/gregoriovargasm/" target="_blank">
              <i className="fab fa-linkedin" title="LINKEDIN"></i>
            </a>
            <a href="https://github.com/Gregor-VM" target="_blank">
              <i className="fab fa-github" title="GITHUB"></i>
            </a>
            <a href="https://wa.me/+18498836573" target="_blank">
              <i className="fab fa-whatsapp" title="WHATSAPP"></i>
            </a>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Layout;
