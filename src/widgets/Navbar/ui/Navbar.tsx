import { classNames } from "helpers/classNames/ClassNames";

import cls from "./navbar.module.scss";
import AppLink, {
  ApplinkTheme,
} from "shared/config/routeConfig/ui/AppLink/AppLink";
interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink theme={ApplinkTheme.PRIMARY} className={cls.mainLink} to="/">
          HOME
        </AppLink>
        <AppLink
          theme={ApplinkTheme.PRIMARY}
          className={cls.aboutLink}
          to="/about"
        >
          ABOUT
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
