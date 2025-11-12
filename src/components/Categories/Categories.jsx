import React, { useEffect, useState } from "react";

export default function Categories() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Categories</h1>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
    </>
  );
}
