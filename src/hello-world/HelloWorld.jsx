import "./HelloWorld.css";


export default function HelloWorld() {
  const txt = {
    props: "Heii World",
    miwa: "Heii Miwa",
  };
  return (
    <>
      <HeaderHelloWorld props="Hello World" />

      {/* Spread Syntax */}
      <HeaderHelloWorld {...txt} />
      <ParagraphHelloWorld />
    </>
  );
}

export function HeaderHelloWorld({ props = "Ups, Lupa kasih teks" }) {
  return (
    <>
      <h1 className="title">{props.toUpperCase()}</h1>
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
