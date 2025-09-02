// Conditional, Ternary Operator & Null Component
export default function TodoConditional({
  text,
  isCompleted,
  isDeleted = false,
}) {
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <li>
        <del>{text} </del>
      </li>
    );
  } else {
    return <li>{text} </li>;
  }
}

export function TodoTernary({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return <li>{isCompleted ? <del> {text} </del> : text}</li>;
  }
}

export function TodoAndLogic({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {/* Klo isComplete true, maka emot centang muncul */}
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}
