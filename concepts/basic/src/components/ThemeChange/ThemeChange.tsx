import classes from "./ThemeChange.module.css";
import "./ThemeChange.css";
import useLocalStorage from "./useLocalStorage";

const ThemeChange = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={classes.lightDarkMode} data-theme={theme}>
      <div className={classes.container}>
        <h1>Light-Dark Mode</h1>
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChange;
