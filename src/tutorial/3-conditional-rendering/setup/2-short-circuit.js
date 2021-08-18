import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      {/*       <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "prle"}</h1> // either/or displays which one the two are true
      FIRST
      <br></br>
      {text && <h1>hello world</h1>} // if first condition(text) is
      false/falsey, renders nothing. if first condition is true, renders 2nd
      statement
    </>
  );
};

export default ShortCircuit;
