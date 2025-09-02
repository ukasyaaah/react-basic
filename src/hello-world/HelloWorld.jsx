export default function HelloWorld() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Selamat Belajar ReactJS dari Ukhasyah</p>
    </>
  );
}

export function HeaderHelloWorld() {
  const text = "Hello World";
  return (
    <>
      <h1
        style={{
          color: "aquamarine",
          backgroundColor: "blue",
          fontFamily: "sans-serif",
        }}
      >
        {text}
      </h1>
    </>
  );
}
export function ParagraphHelloWorld() {
  
  const text = "Selamat Belajar ReactJS dari Ukhasyah";
  const style = {
    fontStyle: "italic",
    fontFamily: "sans-serif",
  };


  return (
    <>
      {/* Mengakses kode JS dgn kurawal */}
      <p style={style}>{text} </p>
    </>
  );
}
