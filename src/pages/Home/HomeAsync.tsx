import { lazy } from "react";

export const HomeAsync = lazy(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => import("./Home"))
);
