import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AlertButton from "./button/AlertButton.jsx";
import MyButton from "./button/MyButton.jsx";
import Toolbar from "./button/Toolbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
