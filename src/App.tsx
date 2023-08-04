import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContacUs from "./pages/ContactUs/ContactUs";
import Counter from "./components/Counter";
import { AboutAsync } from "./pages/About/AboutAcync";
import { ContactUsAsync } from "./pages/ContactUs/ContactUsAsync";
import { Suspense } from "react";
import { HomeAsync } from "./pages/Home/HomeAsync";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">HOME</Link>|-------------|
        <Link to="/about">ABOUT</Link>|-------------|
        <Link to="/contact">CONTACT</Link>|-------------|
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomeAsync />} />
          <Route path="/about" element={<AboutAsync />} />
          <Route path="/contact" element={<ContactUsAsync />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
