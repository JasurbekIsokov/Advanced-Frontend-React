import { lazy } from "react";

export const ContactUsAsync = lazy(() =>
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => import("./ContactUs"))
);
