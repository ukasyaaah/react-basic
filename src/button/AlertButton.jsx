import { useRef } from "react";

export default function AlertButton({ text, textWhenButtonClicked }) {
  const counter = useRef(0);
  function handleClick(e) {
    // e -> event object
    console.info(e.target);
    return alert(`${textWhenButtonClicked} ${counter.current++}`);
  }

  return <button onClick={handleClick}> {text} </button>;
}
