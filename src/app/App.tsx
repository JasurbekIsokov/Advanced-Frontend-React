import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "shared/config/ui/ThemeSwitcher";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Sidebar />
      <AppRouter />
    </div>
  );
};

export default App;
