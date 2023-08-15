import { classNames } from "helpers/classNames/ClassNames";
import { useState } from "react";

import cls from "./Sidebar.module.scss";
import Button from "shared/config/ui/Button/ui/Button";
import { ThemeSwitcher } from "shared/config/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggleClick = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggleClick}>Toggle</Button>

      <div className={cls.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
