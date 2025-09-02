// Nama children / nested component harus children
function Container({ children }) {
  return (
    <>
      <h1>Ukhasyah Zufar Hani</h1>
      {children}
      <footer>
        <p>&copy; 2025 Ukhasyah</p>
      </footer>
    </>
  );
}

export default Container;
