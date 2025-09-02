import { TodoAndLogic } from "./Todo";


export default function TodoList() {
  return (
    <ul>
      <TodoAndLogic text={"Belajar HTML"} isCompleted={true} isDeleted={true} />
      <TodoAndLogic text={"Belajar CSS"} isCompleted={true} />
      <TodoAndLogic text={"Belajar Tailwind"} isCompleted={true} />
      <TodoAndLogic text={"Belajar JS"} isCompleted={true} />
      <TodoAndLogic text={"Belajar Vue"} isCompleted={false} />
      <TodoAndLogic text={"Belajar Next.js"} isCompleted={false} />
    </ul>
  );
}
