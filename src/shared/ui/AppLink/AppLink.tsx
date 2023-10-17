import { classNames } from "shared/lib/classNames/classNames";
import React, { FC } from "react";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum ApplinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondry",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: ApplinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = ApplinkTheme.PRIMARY,
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
