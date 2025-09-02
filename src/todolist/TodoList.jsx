import { Todo } from "./Todo";

export default function TodoList() {
  return (
    <ul>
      <Todo text={"Belajar HTML"} isCompleted={true} />
      <Todo text={"Belajar CSS"} isCompleted={true} />
      <Todo text={"Belajar Tailwind"} isCompleted={true} />
      <Todo text={"Belajar JS"} isCompleted={true} />
      <Todo text={"Belajar Vue"} isCompleted={false} />
      <Todo text={"Belajar Next.js"} isCompleted={false} />
    </ul>
  );
}
