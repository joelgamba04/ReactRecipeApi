import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>Recipe API</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/create">Create New Recipe</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
