import { classNames } from "helpers/classNames/ClassNames";
import slc from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/config/routeConfig/ui/ThemeSwitcher";
import Button from "shared/config/routeConfig/ui/Button/Button";

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
      className={classNames(slc.Sidebar, { [slc.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={onToggleClick}>Toggle</Button>

      <div className={slc.switcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
