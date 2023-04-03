import React, { useState } from "react";
function ToDoList() {
  const [input, setInput] = useState("");
  const [keydata, setKeyData] = useState([]);
  const handleInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleKeyDown = (evnt) => {
    console.log(evnt);

    if (evnt.key === "Enter" && input !== "" && input !== " ") {
      if (keydata.includes(input)) {
        setInput("");
      } else {
        setKeyData([...keydata, input]);
        console.log(input);
        console.log(keydata);
        setInput("");
      }
    } else if (evnt.key === "Delete") {
      setInput("");
    }
  };

  const deleteItem = (item) => {
    console.log(item);
    const deleteItem = keydata.filter((data) => data !== item);
    setKeyData(deleteItem);
    console.log(deleteItem);
  };
  return (
    <>
      <div className="to-do-list">
        <div className="form">
          <input
            className="form-control"
            type="text"
            name="name"
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>

        <ul className="p-0">
          {keydata.map((item, index) => {
            return (
              <>
                <li key={index}>
                  {item} <span onClick={() => deleteItem(item)}>&times;</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
