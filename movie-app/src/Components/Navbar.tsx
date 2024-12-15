import { Link } from "react-router-dom";
import classes from "../css/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarBrand}>
        <Link to="/">Movie App</Link>
      </div>
      <div className={classes.navbarLinks}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
        <Link to="/favorites" className={classes.navLink}>
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
