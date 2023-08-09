import React from "react";
import cls from "./ThemeSvitcher.module.scss";
import { useTheme } from "app/providers/themeProviders";
import { classNames } from "helpers/classNames/ClassNames";
import moon from "../../../../../assets/icons/moon.jpg";
import suun from "../../../../../assets/icons/suun.jpg";
import { Theme } from "app/providers/themeProviders/lib/ThemeContext";
import Button, { ThemeButton } from "../../Button/Button";

interface ThemeSvitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSvitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <img
        style={{
          width: "40px",
          borderRadius: "50%",
        }}
        src={theme == Theme.DARK ? suun : moon}
      />
    </Button>
  );
};

export default ThemeSwitcher;
