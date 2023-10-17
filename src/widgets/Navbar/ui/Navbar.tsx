import { classNames } from "shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/config/ui/Applink";
import { AppLinkTheme } from "shared/config/ui/Applink/ui/AppLink";
import { ThemeSwitcher } from "shared/config/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.PRIMARY}
          to="/"
        >
          {/* {t("home")} */}
          Home
        </AppLink>
        <AppLink
          className={classNames(cls.aboutLink)}
          to="/about"
          theme={AppLinkTheme.PRIMARY}
        >
          {/* {t("about")} */}
          About
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
