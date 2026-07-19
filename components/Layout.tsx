import Modal from "./Modal";
import Head from 'next/head'
import { useTranslation } from "next-i18next/pages";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {

  const { t } = useTranslation('index');

  return (
    <>
    <Modal></Modal>

      <Head>
      <title>Gregorio V. | {t("portfolio")} </title>
      </Head>

      <main style={{overflow: "hidden"}}>{children}</main>
      <Footer />
      </>
  );
}

export default Layout;
