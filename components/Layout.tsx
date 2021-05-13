import Head from "next/head";
import ViewProjectModal from "./ViewProjectModal";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ViewProjectModal>
      <Head>
        <title>Gregorio V. | Portafolio </title>
        <meta
          name="description"
          content="Gregorio Vargas Marrero portafolio desarrollador fronted sitio web"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=PT+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>{children}</main>
      <footer>
        <p>
          Copyright © Gregorio Vargas M. {new Date().getFullYear().toString()}{" "}
        </p>
        <div>
          <span>gregoriovargasmarrero@gmail.com</span>
          <a href="https://github.com/Gregor-VM" target="_blank">
            <i className="fab fa-github" title="GITHUB"></i>
          </a>
          <a href="https://wa.me/+18498585600" target="_blank">
            <i className="fab fa-whatsapp" title="WHATSAPP"></i>
          </a>
        </div>
      </footer>
    </ViewProjectModal>
  );
}

export default Layout;
