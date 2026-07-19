import styles from "../styles/GitHub.module.scss";
import { useTranslation } from "next-i18next/pages";
import { PageSectionEnum } from "../utils/sections";
import { ScrollableSection } from "./ScrollableSection";
import ImageWithLines from "../common/ImageWithLines/ImageWithLines";
import LinkButton from "../common/LinkButton/LinkButton";
import { motion } from 'framer-motion';
import { useAppSelector } from "../redux/hooks";


function GitHub() {

  const user = useAppSelector((state) => state.user.user);

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

              {user?.avatar_url ? (
                <img
                  loading="lazy"
                  src={user.avatar_url}
                  alt={`${user.name} on GitHub`}
                  className={styles.avatar}
                />
              ) : null}

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
                <h2>{user?.name?.toUpperCase()}</h2>
                <p>USERNAME: {user?.login}</p>
                <p>{user?.public_repos ?? 0} {t("currentRepos")}</p>
                <div className={styles["githubInfo__button"]}>
                  <LinkButton variant="inverted" url={user?.html_url ?? "https://github.com/Gregor-VM"} label="goGitHub" icon="fab fa-github" />
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
