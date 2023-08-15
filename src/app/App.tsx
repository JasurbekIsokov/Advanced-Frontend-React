import { classNames } from "../helpers/classNames/ClassNames";

import useTheme from "./providers/themeProviders/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";

import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "uz" ? "en" : "uz");
  };

  return (
    <div>
      <button onClick={toogle}>{t("translation")}</button>
      <h1>{t("test")}</h1>
    </div>
  );
}

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <MyComponent />
      <Sidebar />
      <AppRouter />
    </div>
  );
};

export default App;
