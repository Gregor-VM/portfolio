import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Modal.module.scss";
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

function ViewProjectModal() {
  const view = useSelector((state) => state["view"].view);
  const [isClosing, setIsClosing] = useState(false);
  const project: Project = useSelector((state) => state["view"].project);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      dispatch(viewActions.setView(false));
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    if (view) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [view]);

  if (view) {
    return (
      <>
        <div
          className={
            styles.modalBackground +
            " " +
            styles.backgroundAnimation +
            " " +
            (isClosing ? styles.backgroundCloseAnimation : "")
          }
          onClick={handleCloseModal}
        ></div>
        <i
          className={
            "fas fa-window-close " +
            styles.closeIcon +
            " " +
            (isClosing ? styles.closeIconAnimation : "")
          }
          onClick={handleCloseModal}
        ></i>
        <div
          className={
            styles.modal +
            " " +
            styles.modalAnimation +
            " " +
            (isClosing ? styles.modalCloseAnimation : "")
          }
        >
          <div>
            <div className={styles.modalHead}>
              <h1>{project.title}</h1>
            </div>
            <div className={styles.modalBody}>
              <img
                src={project.img}
                width={project.width}
                height={project.height}
              ></img>
              <p>{project.desc}</p>
            </div>
          </div>
          <a href={project.url} target="_blank">
            Ir al sitio <i className="fas fa-globe"></i>
          </a>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default ViewProjectModal;
