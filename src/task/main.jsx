import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-world/Container";
import Task from "./Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Task />
  </StrictMode>
);
