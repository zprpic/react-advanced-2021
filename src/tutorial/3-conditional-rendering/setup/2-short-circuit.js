import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  //const firstValue = text || "hello world";
  //const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "prle"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>error is true</h1>}
    </>
  );
};

export default ShortCircuit;
