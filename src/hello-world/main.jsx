import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import SayHelloForm from "../form/SayHelloForm";
import Counter, { WrongCounter } from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <hr />
      <SayHelloForm />
      <WrongCounter/>
      <Counter />
    </Container>
  </StrictMode>
);
