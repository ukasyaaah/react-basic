export default function AlertButton({ text, textWhenButtonClicked }) {
  function handleClick() {
    return alert(textWhenButtonClicked);
  }

  return <button onClick={handleClick}> {text} </button>;
}
