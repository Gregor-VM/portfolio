import { useEffect } from "react";
import type { GetServerSideProps } from "next";
import "@fortawesome/fontawesome-free/css/all.min.css";

import styles from "./../styles/Home.module.scss";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GitHub from "../components/GitHub";
import Contact from "../components/Contact";

import userActions from "../redux/actions/userActions";
import Description from "../components/Description";
import Background from "../components/Background";
import isDay from "../hooks/isDay";
import { getLightning } from "../utils/controllers";
import nextI18NextConfig from "../next-i18next.config";

import { serverSideTranslations } from "next-i18next/pages/serverSideTranslations";
import type { User } from "../interfaces/User";
import { useAppDispatch } from "../redux/hooks";

interface HomeProps {
  user: User | null;
  lightning: number | null;
}

export default function Home({ user, lightning }: HomeProps) {
  const dispatch = useAppDispatch();

  const night = !isDay();

  useEffect(() => {
    dispatch(userActions.setUser(user));
  }, [dispatch, user]);

  return (
    <Layout>
      <div className={styles.top}>
        <Background lightning={lightning ?? 0} />
        <NavBar />
        <Description />
        <div className={`${styles.transition} ${night ? styles.nightTransition : ""}`}></div>
      </div>
      <Projects />
      <Skills />
      <GitHub />
      <Contact />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => {
  const lightning = await getLightning();
  const translations = await serverSideTranslations(
    locale ?? "es",
    ["index"],
    nextI18NextConfig,
  );

  try {
    const res = await fetch("https://api.github.com/users/Gregor-VM");
    const {
      login,
      avatar_url,
      html_url,
      name,
      public_repos,
    } = await res.json();

    const user: User = { login, avatar_url, html_url, name, public_repos };

    return {
      props: { user, lightning, ...translations },
    };

  } catch (error) {

    return {
      props: { user: null, lightning, ...translations },
    };

  }
};
