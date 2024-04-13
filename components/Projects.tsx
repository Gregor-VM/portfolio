import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Projects.module.scss";
import ProjectItem from "./ProjectItem";
import useScrollRefProp from "../hooks/useScrollRefProp";
import isElementVisible from "../hooks/isElementVisible";
import { projects } from "../utils/projects";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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

function Projects({ currentRef, handleSetRef }) {

  const { t } = useTranslation('index');

  const {locale} = useRouter();

  const [visible, setVisible] = useState(false);

  const {observeRef, isVisible} = isElementVisible();

  const [titleRef, inView] = useInView();

  const ref: React.LegacyRef<HTMLDivElement> = useRef();

  useScrollRefProp(ref, handleSetRef, currentRef, "projects");

  useEffect(() => {

    if(inView){
      setVisible(true);
    }

  }, [inView]);

  return (
    <div className={styles.twoBoxes} ref={ref}>
      <div className={styles.left}>
        <h2 ref={titleRef}>
          {t('projects')} <i className="fas fa-check-circle"></i>
        </h2>
        <img ref={observeRef} className={isVisible ? styles.appear : ""} src="/project.svg"></img>
      </div>
      <motion.div animate={visible ? 'visible' : 'hidden'} variants={container}>

        {projects.map(project => <ProjectItem key={project.url} {...project} />)}

      </motion.div>
    </div>
  );
}

export default Projects;
