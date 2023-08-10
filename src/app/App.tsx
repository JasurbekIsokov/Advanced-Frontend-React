import { Routes, Route, Link } from "react-router-dom";

import { Suspense } from "react";

import { classNames } from "../helpers/classNames/ClassNames";

import { Home } from "pages/home";
import { About } from "pages/about";

import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toogle</button>
      <div>
        <Link to="/">HOME</Link>|-------------|
        <Link to="/about">ABOUT</Link>|-------------|
      </div>

      <AppRouter />
    </div>
  );
};

export default App;
