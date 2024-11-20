import styles from "../styles/Skills.module.scss";
import isElementVisible from "../hooks/isElementVisible";
import { useTranslation } from "next-i18next";
import { PageSectionEnum } from "../utils/sections";
import { ScrollableSection } from "./ScrollableSection";

function Skills() {

  const { t } = useTranslation('index');
  const {observeRef, isVisible} = isElementVisible();

  return (
    <ScrollableSection id={PageSectionEnum.SKILLS}>
      <div className="section__title">
        <i className="fas fa-laptop-code"></i>
        <span>{t("skills")}</span>
      </div>
      <section className="section section--topClipped">
        <div className="section__background section__background--white">
          <div className="doubleBg">

            <img loading="lazy" src="./skill-top.svg" />
            <img loading="lazy" src="./skill-bottom.svg" />

          </div>
        </div>

        <div className="container">



        <div ref={observeRef} className={`${styles.skills} ${isVisible ? styles.appear : ""}`}>
          <i className="fab fa-html5" title="HTML"></i>
          <i className="fab fa-css3-alt" title="CSS"></i>
          <i className="fab fa-js-square" title="JAVASCRIPT"></i>
          <i className="fab fa-react" title="REACT"></i>
          <i className="fab fa-angular" title="ANGULAR"></i>
          <i className="fab fa-git" title="GIT"></i>
          <i className="fab fa-github" title="GITHUB"></i>
          <i className="fab fa-sass" title="SASS"></i>
          <i className="fab fa-bootstrap" title="BOOTSTRAP"></i>
          <i className="fab fa-node-js" title="NODEJS"></i>
          <img loading="lazy" src="/mongodb_icon.png" title="MONGODB" height="140px" width="140px" />
          <img loading="lazy" src="/typescript_icon.png" title="TYPESCRIPT" height="140px" width="140px" />
        </div>

        </div>
      </section>
    </ScrollableSection>
  );
}

export default Skills;