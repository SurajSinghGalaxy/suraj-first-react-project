import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Form() {
  const [tableInput, setTableInput] = useState([]);
  const [formData, setFormData] = useState({
    fname: "",
    femail: "",
    ftextArea: "",
  });
  const handleForm = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    // console.log(value);
    // console.log(name);
    setFormData((prevValue) => {
      // console.log(prevValue);
      // console.log(prevValue.fname);
      // console.log(prevValue.femail);
      // console.log(prevValue.ftextArea);
      if (name === "fName") {
        return {
          fname: value,
          femail: prevValue.femail,
          ftextArea: prevValue.ftextArea,
        };
      } else if (name === "fEmail") {
        return {
          fname: prevValue.fname,
          femail: value,
          ftextArea: prevValue.ftextArea,
        };
      } else if (name === "fTextArea") {
        return {
          fname: prevValue.fname,
          femail: prevValue.femail,
          ftextArea: value,
        };
      }
    });
  };

  const onSubmit = (evnt) => {
    console.log("hello");
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formData).every((res) => res === "");
    console.log(checkEmptyInput);
    if (checkEmptyInput) {
      const newData = (data) => [...data, formData];
      setTableInput(newData);
      const emptyInput = { fname: "", femail: "", ftextArea: "" };
      setFormData(emptyInput);
    }
  };

  return (
    <>
      <FormInput
        handleChange={handleForm}
        formInputData={formData}
        handleSubmit={onSubmit}
      />
      <Table tableData={tableInput} />
    </>
  );
}

export default Form;
