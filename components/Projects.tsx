import { useRef } from "react";
import styles from "../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";
import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";

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
          img="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
          width="200"
          height="200"
          url="https://rekapping.herokuapp.com/"
        />
        <ProjectItem
          title="Search Movie App"
          desc="Esta es una aplicación para buscar peliculas, ver su descripción, rate, titulo, actores, géneros, etc. En esta aplicación se extrae la información desde OMDB API."
          img="https://code.4noobz.net/wp-content/uploads/2018/10/OMDB-API.png"
          width="200"
          height="100"
          url="https://Gregor-VM.github.io/movie-search"
        />
        <ProjectItem
          title="Clicker React Game"
          desc='Este es un mini juego del genero "clicker" que consiste en ir clicando un botón para ganar puntaje y con el mismo comprar articulos para aumentar el puntaje e ir progresando y llegar a un puntaje cada vez más alto. Ente esta aplicación también se almacena la información localmente en el dispositivo que se esté usando y se puede cambiar entre modo claro y oscuro'
          img="https://cdn.pixabay.com/photo/2013/07/12/19/17/cursor-154478_960_720.png"
          width="90"
          height="125"
          url="https://Gregor-VM.github.io/react-clicker-game"
        />
        <ProjectItem
          title="Firebase App"
          desc="Esta es una aplicación de articulos o notas. En la misma se puede iniciar sesión y subir las notas, las mismas también se pueden editar o borrar al igual que la información de la cuenta con la cual iniciaste sesión en la base de datos de firebase. También puedes ver las notas o articulos que otros usuarios hayan escrito"
          img="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_white.png?hl=es"
          width="200"
          height="100"
          url="https://Gregor-VM.github.io/login-app"
        />
      </div>
    </div>
  );
}

export default Projects;
