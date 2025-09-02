export default function AlertButton({ text, textWhenButtonClicked }) {
  function handleClick(e) {
    // e -> event object
    console.info(e.target);
    return alert(textWhenButtonClicked);
  }

  return <button onClick={handleClick}> {text} </button>;
}
