import TodoConditional, { TodoAndLogic, TodoTernary } from "./Todo";

export default function TodoList() {
  const data = [
    { id: 0, text: "Belajar HTML", isCompleted: true, isDeleted: true },
    { id: 1, text: "Belajar CSS", isCompleted: true },
    { id: 2, text: "Belajar Tailwind", isCompleted: true },
    { id: 3, text: "Belajar JS", isCompleted: true },
    { id: 4, text: "Belajar Vue", isCompleted: false },
    { id: 5, text: "Belajar Next.js", isCompleted: false },
  ];

  // Gunakan key pada setiap komponen yg mau di render
  const todosC = data.map((todo) => (
    <TodoConditional key={todo.id} {...todo} />
  ));

  const todosL = data.map((todo) => <TodoAndLogic key={todo.id} {...todo} />);

  const todosT = data.map((todo) => <TodoTernary key={todo.id} {...todo} />);

  return (
    <>
      {/* Biasanya, user react langsung mapping disini (gaperlu bikin variable TodosC, TodosT) */}
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
