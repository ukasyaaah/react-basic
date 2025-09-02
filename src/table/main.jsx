import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-world/Container";
import Table from "./Table";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Table />
    </Container>
  </StrictMode>
);
