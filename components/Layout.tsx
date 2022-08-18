import Head from "next/head";
import ViewProjectModal from "./ViewProjectModal";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewProjectModal>
      <Head>
        {/*<title>Gregorio V. | Portafolio </title>*/}
        <meta
          name="description"
          content="Gregorio Vargas Marrero portafolio desarrollador fronted sitio web"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;600&family=Rubik+Marker+Hatch&display=swap" rel="stylesheet" />
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
    </ViewProjectModal>
  );
}

export default Layout;
