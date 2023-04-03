import React from "react";
function FormInput({ handleChange, formInputData, handleSubmit }) {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-12">
            {/*First Name */}
            <div className="form-group">
              <input
                className="form-control"
                id="contacFirsttName"
                type="text"
                value={formInputData.fname}
                name="fName"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            {/* Email */}
            <div className="form-group">
              <input
                className="form-control"
                id="mail"
                type="email"
                value={formInputData.femail}
                placeholder="Email"
                name="fEmail"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            {/* COMPANY NAME */}
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Message"
                id="floatingTextarea2"
                style={{ height: 210 }}
                name="fTextArea"
                value={formInputData.ftextArea}
                defaultValue={""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <div className="form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Send me a Newslatter
                </label>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className={`btn btn-secondry`}
              >
                SEND MEssage
              </button>
            </div>
          </div>
        </div>
        {/* <h6>{formInputData.fname}</h6>
        <h6>{formInputData.femail}</h6>
        <h6>{formInputData.ftextArea}</h6> */}
      </form>
    </>
  );
}

export default FormInput;
