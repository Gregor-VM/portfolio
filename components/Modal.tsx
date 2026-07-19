import { useEffect, useRef, useState } from "react";
import styles from "../styles/Modal.module.scss";
import viewActions from "../redux/actions/viewActions";
import { useTranslation } from "next-i18next/pages";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Modal() {

  const { t } = useTranslation('index');

  const view = useAppSelector((state) => state.view.view);
  const [isClosing, setIsClosing] = useState(false);
  const project = useAppSelector((state) => state.view.project);
  const dispatch = useAppDispatch();
  const closeTimerRef = useRef<number | null>(null);

  const handleCloseModal = () => {
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      dispatch(viewActions.setView(false));
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    const previousHeight = document.body.style.height;
    const previousOverflow = document.body.style.overflow;

    if (view) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.height = previousHeight;
      document.body.style.overflow = previousOverflow;
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, [view]);

  if (view && project) {
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
                  <h5>{t("skillsTitle")}:</h5>
                  <ul>
                    {project.skills.map(skill => {
                      const color = skill.backgroundColor ?? "#000000";
                      return (
                        <li key={skill.name}>
                          <span
                            style={{ color, borderColor: `${color}50` }}
                            className={styles.badge}
                          >
                            <i
                              style={{ color }}
                              className={skill.icon ?? undefined}
                            />
                            {skill.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <p className={styles.modalDescription}>{t(project.desc)}</p>
            </div>
          </div>

          <div className={styles.footerButtons}>
            <a href={project.url} target="_blank">
              {t("goToProject")} <i className="fas fa-globe"></i>
            </a>
            <a href={project.github} target="_blank">
              {t("gitHubLink")} <i className="fab fa-github"></i>
            </a>
          </div>

        </div>
      </>
    );
  }

  return null;
}

export default Modal;
