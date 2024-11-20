import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import styles from "./../styles/Home.module.scss";

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GitHub from "../components/GitHub";
import Contact from "../components/Contact";

import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import Description from "../components/Description";
import Background from "../components/Background";
import isDay from "../hooks/isDay";
import { getLightning } from "../utils/controllers";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

export default function Home({ user, lightning }: { user: User, lightning: number }) {
  const dispatch = useDispatch();

  const night = !isDay();

  useEffect(() => {
    if (user) {
      dispatch(userActions.setUser(user));
    }
  }, [dispatch]);

  return (
    <Layout>
      <div className={styles.top}>
        <Background lightning={lightning} />
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

export async function getServerSideProps({locale}) {

  interface User {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    public_repos: number;
  }

  const lightning = await getLightning();

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

    const translations = await serverSideTranslations(locale, [
        'index'
    ]);

    return {
      props: { user: user, lightning, ...translations},
    };

  } catch (error) {

    return {
      props: { user: null, lightning },
    };

  }
}
