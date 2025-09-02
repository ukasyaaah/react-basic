let counter = 0;
export default function Row({ id, text }) {
  return (
    <tr>
      <td> {id} </td>
      <td> {text} </td>
    </tr>
  );
}

export function RowNotPureFunct({ text }) {
  counter++;
  return (
    <tr>
      <td> {counter} </td>
      <td> {text} </td>
    </tr>
  );
}
