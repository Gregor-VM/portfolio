import styles from "../styles/GitHub.module.scss";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";
import { PageSectionEnum } from "../utils/sections";
import { ScrollableSection } from "./ScrollableSection";
import ImageWithLines from "../common/ImageWithLines/ImageWithLines";
import { useSelector } from "react-redux";
import LinkButton from "../common/LinkButton/LinkButton";
import { motion } from 'framer-motion';

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}


function GitHub() {

  const user: User = useSelector((state) => state["user"].user);

  const { t } = useTranslation('index');
  
  return (
    <ScrollableSection id={PageSectionEnum.GITHUB}>

      <div className="section__title section__title--flipped">
        <i className="fab fa-github"></i>
        <span>GITHUB</span>
      </div>
      
      <section className="section section--topClipped">
        <div className="section__background section__background--extraSpace">
        </div>

        <div className="container">

          <div className={styles.githubContent}>

            <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: {delay: 0.2} }}>
              <ImageWithLines url="./version.svg"></ImageWithLines>
            </motion.div>

            <motion.div 

            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            
            className={`${styles.githubPhoto} linesImage`}>

              <img loading="lazy" src={user.avatar_url} className={styles.avatar}></img>

              <div className="linesEffect linesEffect--white linesEffect--flipped">
                <div className="linesEffect__1"></div>
                <div className="linesEffect__2"></div>
                <div className="linesEffect__3"></div>
              </div>

              <div className="linesEffect linesEffect--white">
                <div className="linesEffect__1"></div>
                <div className="linesEffect__2"></div>
                <div className="linesEffect__3"></div>
              </div>

              <div className={styles.githubInfo}>
                <h2>{user.name?.toUpperCase()}</h2>
                <p>USERNAME: {user.login}</p>
                <p>{user.public_repos} {t("currentRepos")}</p>
                <div className={styles["githubInfo__button"]}>
                  <LinkButton variant="inverted" url={user.html_url} label={t("goGitHub")} icon="fab fa-github" />
                </div>
              </div>

              <div className="linesEffect">
                <div className="linesEffect__1"></div>
                <div className="linesEffect__2"></div>
                <div className="linesEffect__3"></div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </ScrollableSection>
  )
}

export default GitHub;