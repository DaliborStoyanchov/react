import classes from "./ThemeChange.module.css";
import useLocalStorage from "./useLocalStorage";

const ThemeChange = () => {
  const [theme, setTheme] = useLocalStorage("theme", true);

  return (
    <div className={classes.lightDarkMode}>
      <div className={classes.container}>
        <h1>Light-Dark Mode</h1>
        <p>Hello World</p>
        <button>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChange;
