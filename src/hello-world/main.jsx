import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld, {
  HeaderHelloWorld,
  ParagraphHelloWorld,
} from "./HelloWorld";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </Container>
  </StrictMode>
);
