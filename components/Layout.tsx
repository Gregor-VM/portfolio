import Head from "next/head";
import ViewProjectModal from "./ViewProjectModal";
import NavBar from "../components/NavBar";

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

        {/* Teko and Lobster Family */}
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Teko:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <NavBar />
      <main>{children}</main>
      <footer>
        <p>
          Copyright © Gregorio Vargas M. {new Date().getFullYear().toString()}{" "}
        </p>
      </footer>
    </ViewProjectModal>
  );
}

export default Layout;
