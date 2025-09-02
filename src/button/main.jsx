import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../hello-world/Container";
import AlertButton from "./AlertButton";
import MyButton from "./MyButton";
import Toolbar from "./Toolbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <AlertButton
        text={"Pencet Aku"}
        textWhenButtonClicked={"Teks Dipencet"}
      />
      <MyButton text={"Smash Me"} onSmash={() => alert("You Smash Me")} />

      {/* Stop Propagation */}
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("Propagation is STOPPED");
        }}
      />
    </Container>
  </StrictMode>
);
