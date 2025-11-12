import React, { useEffect, useState } from "react";

export default function Notfound() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Notfound</h1>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </>
  );
}
