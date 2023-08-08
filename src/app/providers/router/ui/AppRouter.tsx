import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { About } from "pages/about";
import { Home } from "pages/home";

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
