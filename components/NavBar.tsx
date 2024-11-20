import { Tooltip } from 'react-tooltip'
//import isDay from "../hooks/isDay";
import styles from "../styles/NavBar.module.scss";
import { contactLinks } from '../utils/contactLinks';
import { useTranslation } from "next-i18next";
import { sections } from "../utils/sections";
import Link from 'next/link';

function NavBar() {

  const { t } = useTranslation('index');

  //const night = !isDay();

  //const [selected, setSelected] = useState(0);

  return (
    <nav className={styles.nav}>
      
      <div className={styles.navContainer}>
        <div>
          <div className={styles.blue}>GREGOR<span className={styles.blue}>VM</span></div>
        </div>
        <ul className={`${styles.blue} ${styles.list}`}>

          <span 
            className={styles.menu}>
            <li><i className="fas fa-bars"></i></li>
          </span>

          {/*<Link href="#projects"><p>XD</p></Link>*/}

          {sections.map(({key, icon}) => {
            return <Link href={`#${key}`} key={key}>
              <a
                href={`#${key}`}
                data-tooltip-delay-show={250}
                data-tooltip-id={key}
              >
                <li><i className={icon}></i></li>
                <Tooltip id={key} content={t(key)} className={styles.tooltip} />
              </a>
            </Link>
          })}
          <a 
            href={contactLinks.linkedin}
            target="_blank"
            data-tooltip-delay-show={250}
            data-tooltip-id="linkedin">
            <li><i className="fab fa-linkedin"></i></li>
            <Tooltip id="linkedin" content="LinkedIn" className={styles.tooltip} />
          </a>

        </ul>
      </div>

    </nav>

  );
}

export default NavBar;
