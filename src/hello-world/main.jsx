import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld, { HeaderHelloWorld, ParagraphHelloWorld } from "./HelloWorld";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelloWorld />
    <HelloWorld />
    <HelloWorld />
    <HeaderHelloWorld/>
    <ParagraphHelloWorld/>
  </StrictMode>
);
