import React from "react";
import cls from "./ThemeSvitcher.module.scss";
import { useTheme } from "app/providers/themeProviders";
import { classNames } from "helpers/classNames/ClassNames";

interface ThemeSvitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSvitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Toogle
    </button>
  );
};

export default ThemeSwitcher;
