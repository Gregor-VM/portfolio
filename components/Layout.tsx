import ViewProjectModal from "./ViewProjectModal";
import Head from 'next/head'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <ViewProjectModal></ViewProjectModal>

      <Head>
      <title>Gregorio V. | Portafolio </title>
      </Head>

      <main>{children}</main>
      <footer>
        <p>
          Copyright © Gregorio Vargas M. {new Date().getFullYear().toString()}{" "}
        </p>
        <div>
          <span>gregoriovargasmarrero@gmail.com</span>
          <div>
            <a href="https://t.me/Gregorvm" target="_blank">
              <i className="fab fa-telegram" title="TELEGRAM"></i>
            </a>
            <a href="https://github.com/Gregor-VM" target="_blank">
              <i className="fab fa-github" title="GITHUB"></i>
            </a>
            <a href="https://wa.me/+18498585600" target="_blank">
              <i className="fab fa-whatsapp" title="WHATSAPP"></i>
            </a>
          </div>
        </div>
      </footer>
      </>
  );
}

export default Layout;
