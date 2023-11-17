import { useRef } from "react";
import styles from "../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";
import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";
import { skills } from '../utils/skills';

function Projects({ currentRef, handleSetRef }) {

  const {observeRef, isVisible} = isElementVisible();

  const ref: React.LegacyRef<HTMLDivElement> = useRef();
  useScrollRefProp(ref, handleSetRef, currentRef, "projects");
  return (
    <div className={styles.twoBoxes} ref={ref}>
      <div className={styles.left}>
        <h2>
          Proyectos <i className="fas fa-check-circle"></i>
        </h2>
        <img ref={observeRef} className={isVisible ? styles.appear : ""} src="/project.svg"></img>
      </div>
      <div>
        <ProjectItem
          title="Rekapp"
          desc="Rekapp is una aplicación de React que te permite crear y compartir mazos de cartas para estudiar que contienen textos, imágenes y/o audio."
          img="/rekapp.jpeg"
          width="180"
          height="180"
          url="https://rekapp.onrender.com"
          github="https://github.com/Gregor-VM/rekapp"
          skills={[
            skills.html, skills.css, skills.javascript,
            skills.react, skills.sass, skills.nodejs,
            skills.typescript, skills.express,
            skills.mongodb, skills.jest, skills.redux
          ]}
        />
        <ProjectItem
          title="Cipher Game"
          desc="Aplicación hecha en Angular basada en el criptoanálisis basado en el análisis de frecuencia, en esta aplicación resuelves códigos encriptados de frases célebres de diversos autores y tópicos."
          img="/cipher-app.jpeg"
          width="180"
          height="180"
          url="https://gregor-vm.github.io/cipher-app"
          github="https://github.com/Gregor-VM/cipher-app"
          skills={[
            skills.html, skills.css, skills.javascript,
            skills.angular, skills.sass, 
            skills.typescript, skills.bootstrap,
            skills.firebase, 
          ]}
        />
        <ProjectItem
          title="Clicker React Game"
          desc='Este es un mini juego del genero "clicker" que consiste en ir clicando un botón para ganar puntaje y con el mismo comprar articulos para aumentar el puntaje e ir progresando y llegar a un puntaje cada vez más alto. Ente esta aplicación también se almacena la información localmente en el dispositivo que se esté usando y se puede cambiar entre modo claro y oscuro'
          img="/clicker-game.jpeg"
          width="180"
          height="180"
          url="https://Gregor-VM.github.io/react-clicker-game"
          github="https://github.com/Gregor-VM/react-clicker-game"
          skills={[
            skills.html, skills.css, skills.javascript,
            skills.react, skills.bootstrap, skills.redux
          ]}
        />
        <ProjectItem
          title="Firebase App"
          desc="Esta es una aplicación de articulos o notas. En la misma se puede iniciar sesión y subir las notas, las mismas también se pueden editar o borrar al igual que la información de la cuenta con la cual iniciaste sesión en la base de datos de firebase. También puedes ver las notas o articulos que otros usuarios hayan escrito"
          img="/firebase-app.jpeg"
          width="180"
          height="180"
          url="https://Gregor-VM.github.io/login-app"
          github="https://github.com/Gregor-VM/login-app"
          skills={[
            skills.html, skills.css, skills.javascript,
            skills.react, skills.bootstrap,
            skills.firebase
          ]}
        />
      </div>
    </div>
  );
}

export default Projects;
