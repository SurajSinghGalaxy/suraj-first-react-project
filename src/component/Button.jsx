import * as React from "react";
function Button(props) {
  return (
    <button
      type="button"
      className="btn btn-main"
      style={{ fontSize: props.fontSize1, color: props.color1 }}
      onClick={props.onclickFun}
    >
      {props.cartImg1 ? <img src={props.cartImg1} /> : ""}
      {props.surajText ? <span className="ms-3">{props.surajText}</span> : ""}
    </button>
  );
}

export default Button;
