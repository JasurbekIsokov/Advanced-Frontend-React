import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./Applink.module.scss";
import { classNames } from "helpers/classNames/ClassNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondry",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      {...otherProps}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
