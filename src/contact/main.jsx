import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-world/Container";
import ContactPerson, { ContactForm } from "./ContactForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <ContactForm />
      <ContactPerson />
    </Container>
  </StrictMode>
);
