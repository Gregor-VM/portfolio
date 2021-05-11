import styles from "../styles/ProjectItem.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import viewActions from "../redux/actions/viewActions";

interface Project {
  title: string;
  img: string;
  desc: string;
  width: string;
  height: string;
  url: string;
}

function ProjectItem({ title, img, desc, width, height, url }: Project) {
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
    dispatch(viewActions.setProject({ title, img, desc, width, height, url }));
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
      {!isMouseOver && <img src={img} width={width} height={height}></img>}
      <h2>{!isMouseOver && title}</h2>
      <p className={isMouseOver ? styles.textWhite : undefined}>
        {isMouseOver && desc}
      </p>
    </div>
  );
}

export default ProjectItem;
