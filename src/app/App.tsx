import { Suspense, useEffect } from "react";

import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui";
import Loader from "shared/ui/Loader/Loader";
import { classNames } from "shared/lib/classNames/ClassNames";
import { useDispatch } from "react-redux";
import { userActions } from "entities/user";
import { useTheme } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
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
