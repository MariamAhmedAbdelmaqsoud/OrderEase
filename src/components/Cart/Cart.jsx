import React, { useEffect, useState } from "react";
export default function Cart() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Cart</h1>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </>
  );
}
