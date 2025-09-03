import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const initialNote = [
  { id: id++, text: "learn HTML", done: true },
  { id: id++, text: "learn CSS", done: true },
  { id: id++, text: "learn Tailwind", done: true },
  { id: id++, text: "learn Nuxt", done: false },
  { id: id++, text: "learn Vue", done: false },
];

function notesReducer(draft, action) {
  if (action.type === "ADD_NOTE") {
    draft.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);

    draft[index].text = action.text;
    draft[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);
    draft.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNote);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
 