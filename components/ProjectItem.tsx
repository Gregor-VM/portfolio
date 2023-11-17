import styles from "../styles/ProjectItem.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import viewActions from "../redux/actions/viewActions";
import Project from "../interfaces/Project";

function ProjectItem(project: Project) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const dispatch = useDispatch();

  const handleOver = () => {
    setIsMouseOver(true);
  };
  const handleLeave = () => {
    setIsMouseOver(false);
  };

  const showModal = () => {
    dispatch(viewActions.setView(true));
    dispatch(viewActions.setProject(project));
  };

  return (
    <div
      className={
        styles.project + " " + (isMouseOver ? styles.itemAnimation : undefined)
      }
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
      onClick={showModal}
    >
      {!isMouseOver && (
        <img src={project.img} width={project.width} height={project.height} alt={project.title}></img>
      )}
      <h2>{!isMouseOver && project.title}</h2>
      <p className={isMouseOver ? styles.textWhite : undefined}>
        {isMouseOver && project.desc}
      </p>
    </div>
  );
}

export default ProjectItem;
