import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [key, setKey] = useState(true);
  function handleChange(e) {
    setShow(e.target.checked);
  }
  function handleChange2(e) {
    setShow2(e.target.checked);
  }

  function handleChange3(e) {
    setShow3(e.target.checked);
  }

  function handleKey(e) {
    setKey(e.target.checked);
  }
  return (
    <>
      <section>
        {/* State kereset, krn componentnya dihilangkan / diganti */}
        {show ? <Counter name={"Budi"} /> : <p>Hilang</p>}
        <input type="checkbox" checked={show} onChange={handleChange} />
        Tampilkan Counter 1
      </section>
      <hr />
      <section>
        {/* Klo posisinya sama, maka tetep pake state yg sama */}
        {show2 ? <Counter name={"Ari"} /> : <Counter name={"Seta"} />}
        <input type="checkbox" checked={show2} onChange={handleChange2} />
        Tampilkan Counter 2
      </section>
      <hr />
      <section>
        {show3 ? (
          <div>
            <Counter name={"Div"} />
          </div>
        ) : (
          <section>
            <Counter name={"Section"} />
          </section>
        )}
        <input type="checkbox" checked={show3} onChange={handleChange3} />{" "}
        Tampilkan Counter 3
      </section>
      <hr />

      {/* Reset State dgn key */}
      <section>
        {key ? (
          <Counter key={1} name={"Ari key 1"} />
        ) : (
          <Counter key={2} name={"Ari key 2"} />
        )}
        <input type="checkbox" checked={key} onChange={handleKey} /> Ubah Key
      </section>
    </>
  );
}
