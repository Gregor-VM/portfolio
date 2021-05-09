import styles from "../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className={styles.twoBoxes} id="projects">
      <h2>Proyectos</h2>
      <div>
        <ProjectItem
          title="Todo App"
          desc="Esta es una aplicación para crear notas, editar y eliminarlas. La misma usa el localStorage para guardarlas localmente en el dispositivo con el que se esté trabajando."
          img="https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
          width="200"
          height="200"
        />
        <ProjectItem
          title="Search Movie App"
          desc="Esta es una aplicación para buscar peliculas, ver su descripción, rate, titulo, actores, géneros, etc. En esta aplicación se extrae la información desde OMDB API."
          img="https://code.4noobz.net/wp-content/uploads/2018/10/OMDB-API.png"
          width="200"
          height="100"
        />
        <ProjectItem
          title="Clicker React Game"
          desc='Este es un mini juego del genero "clicker" que consiste en ir clicando un botón para ganar puntaje y con el mismo comprar articulos para aumentar el puntaje e ir progresando y llegar a un puntaje cada vez más alto. Ente esta aplicación también se almacena la información localmente en el dispositivo que se esté usando y se puede cambiar entre modo claro y oscuro'
          img="https://cdn.pixabay.com/photo/2013/07/12/19/17/cursor-154478_960_720.png"
          width="90"
          height="125"
        />
        <ProjectItem
          title="Firebase App"
          desc="Esta es una aplicación de articulos o notas. En la misma se puede iniciar sesión y subir las notas, las mismas también se pueden editar o borrar al igual que la información de la cuenta con la cual iniciaste sesión en la base de datos de firebase. También puedes ver las notas o articulos que otros usuarios hayan escrito"
          img="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_white.png?hl=es"
          width="200"
          height="100"
        />
      </div>
    </div>
  );
}

export default Projects;
