import { skills } from "./skills";

export   const projects = [
    {
      title: "DevShortcut",
      desc: "devShortcutDesc",
      img: "/devshortcut.png",
      url: "https://devshortcut.vercel.app",
      github: "https://github.com/Gregor-VM/devshortcut",
      year: 2024,
      skills: [
        skills.html, skills.css, skills.javascript, skills.nodejs,
        skills.preact, skills.typescript, skills.express, skills.tailwind, skills.axios, skills.vite
      ]
    },
    {
      title: "Rekapp",
      desc: "rekappDesc",
      img: "/rekapp.avif",
      year: 2020,
      url: "https://rekapp.vercel.app/demo",
      github: "https://github.com/Gregor-VM/rekapp",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.react, skills.sass, skills.nodejs,
        skills.typescript, skills.express,
        skills.mongodb, skills.jest, skills.redux, skills.jwt, 
        skills.axios, skills.reactRouterDom
      ]
    },
    {
      title: "Cipher Game",
      desc: "cipherDesc",
      img: "/ciphergame.avif",
      year: 2023,
      url: "https://gregor-vm.github.io/cipher-app",
      github: "https://github.com/Gregor-VM/cipher-app",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.angular, skills.sass, 
        skills.typescript, skills.bootstrap,
        skills.firebase, skills.ngrx
      ]
    },
    {
      title: "Firebase App",
      desc: "firebaseDesc",
      img: "/firebaseapp.avif",
      year: 2020,
      url: "https://Gregor-VM.github.io/login-app/#/demo",
      github: "https://github.com/Gregor-VM/login-app",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.react, skills.bootstrap,
        skills.firebase
      ]
    }
];
