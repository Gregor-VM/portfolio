import { useEffect } from "react";
//import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GitHub from "../components/GitHub";
import Contact from "../components/Contact";

import { useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

export default function Home({ user }: { user: User }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.setUser(user));
  }, [dispatch]);

  return (
    <Layout>
      <Projects />
      <Skills />
      <GitHub />
      <Contact />
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
  const res = await fetch("https://api.github.com/users/Gregorio-VM");
  const { login, avatar_url, html_url, name, public_repos } = await res.json();
  const user: User = { login, avatar_url, html_url, name, public_repos };
  return {
    props: { user: user },
  };
}
