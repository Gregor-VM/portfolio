import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from "../styles/Projects.module.scss";
import { useTranslation } from 'next-i18next';
import LinkButton from '../common/LinkButton/LinkButton';
import CanvasBalls from './CanvasBalls';
import { projects } from '../utils/projects';
import { ScrollableSection } from './ScrollableSection';
import { PageSectionEnum } from '../utils/sections';

function Projects() {
  const { t } = useTranslation('index');

  const isHoveringTarget = useRef(false);

  const projectInfoRef = useRef<Array<HTMLDivElement>>([]);

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
    var rect = (e.target as HTMLDivElement).getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    isHoveringTarget.current = true;
    projectInfoRef.current[i].style.clipPath = `circle(200% at ${x}px ${y}px)`;
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number) => {
    var rect = (e.target as HTMLDivElement).getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    projectInfoRef.current[i].style.clipPath = `circle(0% at ${x}px ${y}px)`;
    isHoveringTarget.current = false;
  }

  return (
    <ScrollableSection id={PageSectionEnum.PROJECTS}><section className="section">

      <div className="section__background"></div>

      <div className="container">

        <h2 className="font-white"><i className="fas fa-certificate iconLeft"></i>{t("selectedProjects").toUpperCase()}</h2>

          {projects.map((project, i) => {
            return <div key={i} className={`${styles.project} ${i % 2 === 0 ? "" : styles["project--flipped"]}`}>
              <div className={`${styles["project__text"]} font-white`}>
              <h1>{project.title.toUpperCase()}</h1>
              <h4>{project.year}</h4>

              <div className={styles["project__buttons"]}>
                <LinkButton variant="white" url={project.url} label={t("liveDemo")?.toUpperCase()} icon="fas fa-desktop"></LinkButton>
                <LinkButton url={project.github} label={t("viewGitHub")?.toUpperCase()} icon="fas fa-code"></LinkButton>
              </div>
            </div>

            <div className={styles["project__image"]} onMouseEnter={(e) => onMouseEnter(e, i)} onMouseLeave={(e) => onMouseLeave(e, i)}>
              <img loading="lazy" src={project.img} alt="Project image" />
              <div ref={el => projectInfoRef.current[i] = el} className={styles["project__info"]}>

                <CanvasBalls />

                <div className={styles["project__info__title"]}>
                  <h3>{t("WhatDoesItDo")}</h3>
                </div>

                <p>{t(project.desc)}</p>

                <div className={styles["project__info__skills"]}>
                  {project.skills.map(skill => {
                    return <span>{skill.name.toUpperCase()}</span>
                  })}
                </div>

              </div>
            </div>
          </div>
          })}

          <div className={styles["seeMoreButton"]}>

            <LinkButton variant='white' url="https://github.com/Gregor-VM" label={t("SeeMoreOnGithub")} icon="fab fa-github"></LinkButton>

          </div>

      </div>

    </section></ScrollableSection>
  )
}

export default Projects





/*import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";
import isElementVisible from "../hooks/isElementVisible";
import { projects } from "../utils/projects";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ScrollableSection } from "./ScrollableSection";
import { PageSectionEnum } from "../utils/sections";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

function Projects() {

  const { t } = useTranslation('index');

  const {locale} = useRouter();

  const [visible, setVisible] = useState(false);

  const {observeRef, isVisible} = isElementVisible();

  const [titleRef, inView] = useInView();

  useEffect(() => {

    if(inView){
      setVisible(true);
    }

  }, [inView]);

  return (
    <div className={styles.twoBoxes}>
      <div className={styles.left}>
        <ScrollableSection id={PageSectionEnum.PROJECTS}>
          <h2 ref={titleRef}>
          {t('projects')} <i className="fas fa-check-circle"></i>
          </h2>
        </ScrollableSection>
        <img ref={observeRef} className={isVisible ? styles.appear : ""} src="/project.svg"></img>
      </div>
      <motion.div animate={visible ? 'visible' : 'hidden'} variants={container}>

        {projects.map(project => <ProjectItem key={project.url} {...project} />)}

      </motion.div>
    </div>
  );
}

export default Projects;*/
