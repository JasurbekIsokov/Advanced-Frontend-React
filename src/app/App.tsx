import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import { AppRouter } from "./providers/router";
import Navbar from "widgets/Navbar/ui/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />

      <AppRouter />
      <button onClick={toggleTheme}>Toogle</button>
    </div>
  );
};

export default App;
