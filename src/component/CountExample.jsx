import Button from "./Button";
import React, { useState } from "react";
function CountExample() {
  let [count, setCount] = useState(0);
  let increment = (event) => {
    if (count >= 0 && count < 20) {
      setCount(count + 1);
      console.log(count);
    }
  };
  let decrement = (event) => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };

  // if (count <= 0) {
  //   decrement = () => setCount(0);
  // }
  return (
    <>
      <h5>{count}</h5>
      <Button surajText="increase" onclickFun={increment} />
      <Button surajText="decrease" className="ms-2" onclickFun={decrement} />
    </>
  );
}

export default CountExample;
