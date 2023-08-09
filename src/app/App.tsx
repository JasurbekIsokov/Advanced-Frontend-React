import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
