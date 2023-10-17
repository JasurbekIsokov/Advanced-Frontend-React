import { classNames } from "shared/lib/classNames/classNames";

import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/themeProviders";
import Button, { ThemeButton } from "../../Button/ui/Button";
import { Theme } from "app/providers/themeProviders/lib/ThemeContext";

import Moon from "../../../../assets/icons/theme-dark.svg";
import Suun from "../../../../assets/icons/theme-light.svg";

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
      {theme == Theme.DARK ? <Moon /> : <Suun />}
    </Button>
  );
};

export default ThemeSwitcher;
