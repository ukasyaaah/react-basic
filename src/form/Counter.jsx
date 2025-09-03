import { useState } from "react";

// Gunakan State agar dirender ulang
export default function Counter() {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }
  return (
    <>
      <button onClick={handleClick}> Increment</button>
      <h1> Counter : {counter} </h1>
    </>
  );
}

export function WrongCounter() {
  let counter = 0;

  function handleClick() {
    counter++;
    console.log(counter);
  }
  return (
    <>
      <button onClick={handleClick}>Wrong Increment</button>
      <h1>Wrong Counter : {counter} </h1>
    </>
  );
}
