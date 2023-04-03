import React from "react";
import { data } from "../App";
function Context() {
  return (
    <>
      <data.Consumer>
        {(item) => {
          return <>{item}</>;
        }}
      </data.Consumer>
    </>
  );
}

export default Context;
