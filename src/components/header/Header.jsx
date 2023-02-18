import classes from "./Header.module.css";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";

const Header = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const [activeTheme, setActiveTheme] = useState(
    document.body.dataset.theme || "light"
  );
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const savedTheme = getLocalStorage("theme");
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  const handleDarkTheme = () => {
    setActiveTheme(inactiveTheme);
    setLocalStorage("theme", activeTheme);
  };

  const handleLightTheme = () => {
    setActiveTheme(inactiveTheme);
    setLocalStorage("theme", activeTheme);
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
