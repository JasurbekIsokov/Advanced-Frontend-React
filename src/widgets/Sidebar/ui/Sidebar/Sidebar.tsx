import { classNames } from "helpers/classNames/ClassNames";
import { useState } from "react";

import cls from "./Sidebar.module.scss";
import {
  Button,
  ButtonSize,
  ThemeButton,
} from "shared/config/ui/Button/ui/Button";
import { ThemeSwitcher } from "shared/config/ui/ThemeSwitcher";
import LangSwitcher from "shared/config/ui/LangSwitcher/LangSwitcher";
import { AppLink } from "shared/config/ui/Applink";
import { AppLinkTheme } from "shared/config/ui/Applink/ui/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggleClick}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.home}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("home")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("about")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};

export default Sidebar;
