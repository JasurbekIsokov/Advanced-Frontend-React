import { classNames } from "helpers/classNames/ClassNames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondry",
}

interface AppLinkProps {
  className?: string;
  theme?: AppLinkTheme;
  to?: string;
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
