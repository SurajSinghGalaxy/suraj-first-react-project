import React, { useState } from "react";
import Button from "./Button";
// This function use High Order Component.
function Hoc() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <BlueBgHoc cmp={Counterfun} />
        <YellowBgHoc cmp={Counterfun} />
      </div>
    </>
  );
}
function BlueBgHoc(props) {
  return (
    <>
      <h2
        style={{
          backgroundColor: "red",
          width: "200px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <props.cmp />
      </h2>
      <h2
        style={{
          backgroundColor: "green",
          width: "200px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <props.cmp />
      </h2>
    </>
  );
}
function YellowBgHoc(props) {
  return (
    <>
      <h5
        style={{
          backgroundColor: "yellow",
          width: "200px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <props.cmp />
      </h5>
    </>
  );
}
function Counterfun() {
  const [count, setcount] = useState(0);
  const incrementF = (event) => {
    setcount(count + 1);
  };
  return (
    <>
      <h6>{count}</h6>
      <Button surajText="Increase NO" onclickFun={incrementF} />
    </>
  );
}
export default Hoc;
