import React, { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("tab1");
  const handleTabs = (id) => {
    setTab(id);
    console.log(id);
  };

  return (
    <>
      <div className="tabs">
        <ul>
          <li>
            <button
              type="Button"
              onClick={() => handleTabs("tab1")}
              className="btn btn-primary"
            >
              Music
            </button>
          </li>
          <li>
            <button
              type="Button"
              onClick={() => handleTabs("tab2")}
              className="btn btn-primary"
            >
              Video
            </button>
          </li>
          <li>
            <button
              type="Button"
              onClick={() => handleTabs("tab3")}
              className="btn btn-primary"
            >
              Content
            </button>
          </li>
        </ul>
      </div>

      {tab == "tab1" ? (
        <div className={`tab ${tab == "tab1" ? "FirstTab active" : null}`}>
          <p>First Tab!! Hurray!!</p>
          {/* First tab content will go here */}
        </div>
      ) : null}
      {tab == "tab2" ? (
        <div className={`tab ${tab == "tab2" ? "SecondTab active" : null}`}>
          <p>Second Tab!! Hurray!!</p>
          {/* First tab content will go here */}
        </div>
      ) : null}
      {tab == "tab3" ? (
        <div className={`tab ${tab == "tab3" ? "ThirdTab active" : null}`}>
          <p>Third Tab!! Hurray!!</p>
          {/* First tab content will go here */}
        </div>
      ) : null}
    </>
  );
}
export default Tabs;
