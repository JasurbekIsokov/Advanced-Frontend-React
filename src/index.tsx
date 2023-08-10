import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/index.scss";
import App from "./app/App";
import { ThemeProvider } from "app/providers/themeProviders";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);