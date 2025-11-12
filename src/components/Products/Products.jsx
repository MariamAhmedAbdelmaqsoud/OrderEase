import React, { useEffect, useState } from "react";

export default function Products() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Products</h1>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </>
  );
}
