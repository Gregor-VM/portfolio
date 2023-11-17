import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Modal.module.scss";
import { useDispatch } from "react-redux";
import viewActions from "../redux/actions/viewActions";
import Project from "../interfaces/Project";

function Modal() {
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
              <i
                className={
                  "fas fa-window-close " +
                  styles.closeIcon +
                  " " +
                  (isClosing ? styles.closeIconAnimation : "")
                }
                onClick={handleCloseModal}
              ></i>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.projectInfo}>
                <img
                  src={project.img}
                  width={project.width}
                  height={project.height}
                  className={styles.modalImage}
                ></img>
                <div className={styles.projectSkills}>
                  <h5>TECNOLOGÍAS UTILIZADAS:</h5>
                  <ul>
                    {project.skills.map(skill => {
                      return <li><span 
                       style={{color: skill.backgroundColor, borderColor: skill.backgroundColor+'50'}}
                       className={styles.badge}>
                        <i style={{color: skill.backgroundColor}} className={skill.icon}></i>
                        {skill.name}</span></li>
                    })}
                  </ul>
                </div>
              </div>
              <p className={styles.modalDescription}>{project.desc}</p>
            </div>
          </div>

          <div className={styles.footerButtons}>
            <a href={project.url} target="_blank">
              Ir al sitio <i className="fas fa-globe"></i>
            </a>
            <a href={project.github} target="_blank">
              Ver en GitHub <i className="fab fa-github"></i>
            </a>
          </div>

        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default Modal;
