import React from "react";

function Table({ tableData }) {
  return (
    <>
      <table
        style={{
          overflowX: "auto",
          width: "100%",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {/* <thead>
          <tr>
            <td>S No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>TextArea</td>
          </tr>
        </thead> */}

        <tbody>
          {tableData &&
            tableData.map((data, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.fname}</td>
                    <td>{data.femail}</td>
                    <td>{data.ftextArea}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
