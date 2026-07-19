import { useRef } from 'react'
import styles from "../styles/Projects.module.scss";
import { useTranslation } from 'next-i18next/pages';
import LinkButton from '../common/LinkButton/LinkButton';
import CanvasBalls from './CanvasBalls';
import { projects } from '../utils/projects';
import { ScrollableSection } from './ScrollableSection';
import { PageSectionEnum } from '../utils/sections';
import { motion } from 'framer-motion';

function Projects() {
  const { t } = useTranslation('index');

  const isHoveringTarget = useRef(false);

  const projectInfoRef = useRef<Array<HTMLDivElement | null>>([]);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    isHoveringTarget.current = true;
    const projectInfo = projectInfoRef.current[i];
    if (projectInfo) projectInfo.style.clipPath = `circle(200% at ${x}px ${y}px)`;
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const projectInfo = projectInfoRef.current[i];
    if (projectInfo) projectInfo.style.clipPath = `circle(0% at ${x}px ${y}px)`;
    isHoveringTarget.current = false;
  }

  return (
    <ScrollableSection id={PageSectionEnum.PROJECTS}><section className="section">

      <div className="section__background"></div>

      <div className="container">

        <h2 className="font-white"><i className="fas fa-certificate iconLeft"></i>{t("selectedProjects").toUpperCase()}</h2>

          {projects.map((project, i) => {
            return <motion.div

            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            
            key={i} className={`${styles.project} ${i % 2 === 0 ? "" : styles["project--flipped"]}`}>
              <div className={`${styles["project__text"]} font-white`}>
              <h1>{project.title.toUpperCase()}</h1>
              <h4>{project.year}</h4>

              <div className={styles["project__buttons"]}>
                <LinkButton variant="white" url={project.url} label="liveDemo" icon="fas fa-desktop"></LinkButton>
                <LinkButton url={project.github} label="viewGitHub" icon="fas fa-code"></LinkButton>
              </div>
            </div>

            <div className={styles["project__image"]} onMouseEnter={(e) => onMouseEnter(e, i)} onMouseLeave={(e) => onMouseLeave(e, i)}>
              <img loading="lazy" src={project.img} alt="Project image" />
              <div ref={(element) => { projectInfoRef.current[i] = element; }} className={styles["project__info"]}>

                <CanvasBalls />

                <div className={styles["project__info__title"]}>
                  <h3>{t("WhatDoesItDo")}</h3>
                </div>

                <p>{t(project.desc)}</p>

                <div className={styles["project__info__skills"]}>
                  {project.skills.map(skill => {
                    return <span key={skill.name}>{skill.name.toUpperCase()}</span>
                  })}
                </div>

              </div>
            </div>
          </motion.div>
          })}

          <div className={styles["seeMoreButton"]}>

            <LinkButton variant='white' url="https://github.com/Gregor-VM" label="SeeMoreOnGithub" icon="fab fa-github"></LinkButton>

          </div>

      </div>

    </section></ScrollableSection>
  )
}

export default Projects
