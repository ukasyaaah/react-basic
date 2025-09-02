import TodoConditional, { TodoAndLogic, TodoTernary } from "./Todo";

export default function TodoList() {
  const data = [
    {
      text: "Belajar HTML",
      isCompleted: true,
      isDeleted: true,
    },
    {
      text: "Belajar CSS",
      isCompleted: true,
    },
    {
      text: "Belajar Tailwind",
      isCompleted: true,
    },
    {
      text: "Belajar JS",
      isCompleted: true,
    },
    {
      text: "Belajar Vue",
      isCompleted: false,
    },
    {
      text: "Belajar Next.js",
      isCompleted: false,
    },
  ];

  const todosC = data.map((todo) => {
    return <TodoConditional {...todo} />;
  });

  const todosL = data.map((todo) => {
    return <TodoAndLogic {...todo} />;
  });

  const todosT = data.map((todo) => {
    return <TodoTernary {...todo} />;
  });

  return (
    <>
      <section>
        <h1 className="title">Todo Conditional</h1>
        <ul> {todosC} </ul>
        <hr />
      </section>
      <section>
        <h1 className="title">Todo && Logic</h1>
        <ul> {todosL} </ul>
        <hr />
      </section>
      <section>
        <h1 className="title">Todo Ternary</h1>
        <ul> {todosT} </ul>
        <hr />
      </section>
    </>
  );
}
