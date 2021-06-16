import { useEffect, useState } from "react";
//import Image from "next/image";
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

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

export default function Home({ user }: { user: User }) {
  const [ref, setRef] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(userActions.setUser(user));
    }
  }, [dispatch]);

  const handleSetRef = (ref) => {
    setRef(ref);
  };

  return (
    <Layout>
      <div className={styles.top}>
        <NavBar handleSetRef={handleSetRef} />
        <Description handleSetRef={handleSetRef} />
        <div className={styles.transition}></div>
      </div>
      <Projects currentRef={ref} handleSetRef={handleSetRef} />
      <Skills currentRef={ref} handleSetRef={handleSetRef} />
      <GitHub currentRef={ref} handleSetRef={handleSetRef} />
      <Contact currentRef={ref} handleSetRef={handleSetRef} />
    </Layout>
  );
}

export async function getServerSideProps() {
  interface User {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    public_repos: number;
  }
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
      props: { user: user },
    };
  } catch (error) {
    return {
      props: { user: null },
    };
  }
}
