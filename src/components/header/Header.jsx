import classes from "./Header.module.css";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeTheme, setActiveTheme] = useState("light");

  const handleDarkTheme = () => {
    setActiveTheme("dark");
  };

  const handleLightTheme = () => {
    setActiveTheme("light");
  };

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <div className={classes.header}>
      <h2 className={classes.title}>Where in the world?</h2>
      <div>
        {activeTheme === "light" ? (
          <div className={classes.mode} onClick={handleDarkTheme}>
            <BsMoonFill size={15} className={classes["mode-icon"]} />
            <p className={classes["mode-title"]}>Dark Mode</p>
          </div>
        ) : (
          <div className={classes.mode} onClick={handleLightTheme}>
            <BsFillSunFill size={20} className={classes["mode-icon"]} />
            <p className={classes["mode-title"]}>Light Mode</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
