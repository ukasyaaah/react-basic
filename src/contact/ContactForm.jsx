import { useState } from "react";
import { useImmer } from "use-immer";

// With Immer
export default function ContactPerson() {
  let [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    setContact((contact) => {
      contact.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }

  return (
    <section>
      <h1>Contact Person Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Person</h1>
      <p>Name : {contact.name} </p>
      <p>Message : {contact.message} </p>
    </section>
  );
}

export function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }

  function handleMessageChange(e) {
    setContact({ ...contact, message: e.target.value });
  }

  return (
    <section>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Info</h1>
      <p>Name : {contact.name} </p>
      <p>Message : {contact.message} </p>
    </section>
  );
}
