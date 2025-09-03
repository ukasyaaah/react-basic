import { useImmer } from "use-immer";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

export default function Task() {
  const [items, setItems] = useImmer([]);

  return (
    <section>
      <TaskForm setItems={setItems} />
      <TaskList items={items} setItems={setItems} />
    </section>
  );
}
