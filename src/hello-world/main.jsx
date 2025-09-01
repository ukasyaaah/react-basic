import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
  </StrictMode>
);
