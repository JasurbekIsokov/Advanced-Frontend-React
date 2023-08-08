import { Routes, Route, Link } from "react-router-dom";

import { AboutAsync } from "./pages/About/AboutAcync";
import { ContactUsAsync } from "./pages/ContactUs/ContactUsAsync";
import { Suspense } from "react";
import { HomeAsync } from "./pages/Home/HomeAsync";
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./helpers/classNames/ClassNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toogle</button>
      <div>
        <Link to="/">HOME</Link>|-------------|
        <Link to="/about">ABOUT</Link>|-------------|
        <Link to="/contact">CONTACT</Link>|-------------|
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomeAsync />} />
          <Route path="/about" element={<AboutAsync />} />
          <Route path="/contact" element={<ContactUsAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
