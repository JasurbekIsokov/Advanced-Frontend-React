import { lazy } from "react";

export const AboutAsync = lazy(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => import("./About"))
);
