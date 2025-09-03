export default function GuestBookForm({ ref, name, setName }) {
  return (
    <>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        value={name}
        ref={ref}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
    </>
  );
}
