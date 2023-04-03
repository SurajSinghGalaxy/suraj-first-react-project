import React from "react";
const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const division = (a, b) => {
  return a / b;
};
function Calculator() {
  return (
    <>
      <h5>The two number of sum = {sum(20, 15)}</h5>
      <h5>The two number of sub = {sub(20, 15)}</h5>
      <h5>The two number of multiply = {multiply(20, 15)}</h5>
      <h5>The two number of division = {division(20, 15)}</h5>
    </>
  );
}

export default Calculator;
