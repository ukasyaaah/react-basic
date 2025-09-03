import { useState } from "react";
import { useImmer } from "use-immer";

export default function Task() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);

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
      <h1>List Taks</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>
    </section>
  );
}
