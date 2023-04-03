import * as React from "react";
function Heading(props) {
  //   console.log(props);
  return (
    <>
      {props.mainTitle ? (
        <h2 className="books-heading">{props.mainTitle}</h2>
      ) : (
        ""
      )}

      {props.title ? <h3 className="bdr">{props.title}</h3> : ""}
      {props.para ? <p> {props.para} </p> : ""}
      {props.footerHeading ? (
        <h4 className="text-white">{props.footerHeading}</h4>
      ) : (
        ""
      )}
      {props.para1 ? (
        <p>
          {props.para1}
          {props.content ? (
            <span className="content"> {props.content}</span>
          ) : (
            ""
          )}
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default Heading;
