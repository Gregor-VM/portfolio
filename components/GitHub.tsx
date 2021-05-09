import { useSelector } from "react-redux";
import styles from "../styles/GitHub.module.scss";

interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
}

function GitHub() {
  const user: User = useSelector((state) => state["user"].user);
  return (
    <div className={styles.container} id="github">
      <div>
        <h1>
          GitHub <i className="fab fa-github"></i>
        </h1>
        <img src={user.avatar_url}></img>
        <h2>{user.name}</h2>
        <small>Username: {user.login}</small>
        <p>{user.public_repos} repositorios creados actualmente</p>
        <a href={user.html_url}>
          <span>Ir al GitHub</span> <i className="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}

export default GitHub;
