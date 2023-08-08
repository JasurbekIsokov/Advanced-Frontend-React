import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import ThemeProvider from "./Theme/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
