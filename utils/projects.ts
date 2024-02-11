import { skills } from "./skills";

export   const projects = [
    {
      title: "Rekapp",
      desc: "Rekapp is una aplicación de React que te permite crear y compartir mazos de cartas para estudiar que contienen textos, imágenes y/o audio.",
      img: "/rekapp.jpeg",
      width: "180",
      height: "180",
      url: "https://rekapp.vercel.app/demo",
      github: "https://github.com/Gregor-VM/rekapp",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.react, skills.sass, skills.nodejs,
        skills.typescript, skills.express,
        skills.mongodb, skills.jest, skills.redux
      ]
    },
    {
      title: "Cipher Game",
      desc: "Aplicación hecha en Angular basada en el criptoanálisis basado en el análisis de frecuencia, en esta aplicación resuelves códigos encriptados de frases célebres de diversos autores y tópicos.",
      img: "/cipher-app.jpeg",
      width: "180",
      height: "180",
      url: "https://gregor-vm.github.io/cipher-app",
      github: "https://github.com/Gregor-VM/cipher-app",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.angular, skills.sass, 
        skills.typescript, skills.bootstrap,
        skills.firebase, 
      ]
    },
    {
      title: "DevShortcut",
      desc: "Aplicación para visualizar ejemplos de código organizados en la aplicación en diferentes categorías o para visualizar cualquier proyecto de GitHub en una interfaz rápida y conveniente",
      img: "/devshortcut.png",
      width: "180",
      height: "180",
      url: "https://devshortcut.vercel.app",
      github: "https://github.com/Gregor-VM/devshortcut",
      skills: [
        skills.html, skills.css, skills.javascript, skills.nodejs,
        skills.preact, skills.typescript, skills.express
      ]
    },
    {
      title: "Firebase App",
      desc: "Esta es una aplicación de articulos o notas. En la misma se puede iniciar sesión y subir las notas, las mismas también se pueden editar o borrar al igual que la información de la cuenta con la cual iniciaste sesión en la base de datos de firebase. También puedes ver las notas o articulos que otros usuarios hayan escrito",
      img: "/firebase-app.jpeg",
      width: "180",
      height: "180",
      url: "https://Gregor-VM.github.io/login-app/#/demo",
      github: "https://github.com/Gregor-VM/login-app",
      skills: [
        skills.html, skills.css, skills.javascript,
        skills.react, skills.bootstrap,
        skills.firebase
      ]
    }
];
