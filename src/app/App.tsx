import { Suspense } from "react";
import { classNames } from "../helpers/classNames/ClassNames";
import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import { Counter } from "entities";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <Counter />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
