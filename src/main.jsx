import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AlertButton from "./button/AlertButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertButton text={"Pencet Aku"} textWhenButtonClicked={"Teks Dipencet"} />
  </StrictMode>
);
