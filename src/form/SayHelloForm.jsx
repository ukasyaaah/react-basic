export default function SayHelloForm() {
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }
  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="text_hello">Hello Guest</h1>
    </div>
  );
}
