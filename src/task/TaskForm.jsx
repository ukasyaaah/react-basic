import { useState } from "react";

export default function TaskForm({ setItems }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setItems((draft) => {
      draft.push(item);
    });
    setItem("");
  }

  return (
    <section>
      <h1>Create Taks</h1>
      <form>
        <input type="text" name="Task" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add a Task</button>
      </form>
    </section>
  );
}
