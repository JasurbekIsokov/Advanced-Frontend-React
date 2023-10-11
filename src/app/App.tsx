import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
