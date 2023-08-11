import { classNames } from "helpers/classNames/ClassNames";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/config/ui/Applink";
import { AppLinkTheme } from "shared/config/ui/Applink/ui/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink
          className={classNames(cls.mainLink)}
          theme={AppLinkTheme.PRIMARY}
          to="/"
        >
          HOME
        </AppLink>
        <AppLink
          className={classNames(cls.aboutLink)}
          to="/about"
          theme={AppLinkTheme.PRIMARY}
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
