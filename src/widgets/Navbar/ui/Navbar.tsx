import { Link } from "react-router-dom";

import cls from "./Navbar.module.scss";
import { classNames } from "helpers/classNames/ClassNames";
import AppLink, { AppLinkTheme } from "shared/links/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.mainLink)}
          to="/"
        >
          HOME
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={classNames(cls.aboutLink)}
          to="/about"
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
