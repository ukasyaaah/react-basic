import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show, setShow] = useState(true);
  function handleChange(e) {
    setShow(e.target.checked);
  }
  return (
    <>
      <Counter name={"Eko"} />
      {show && <Counter name={"Budi"} />}
      <input type="checkbox" checked={show} onChange={handleChange} />
      Tampilkan Counter 2
    </>
  );
}
