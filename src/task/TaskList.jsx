export default function TaskList({ items = [], setItems }) {
  function deleteItem(index) {
    setItems((draft) => {
      draft.splice(index, 1);
    });
  }
  return (
    <>
      <h1>List Taks</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => deleteItem(index)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
