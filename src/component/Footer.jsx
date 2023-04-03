import React from "react";
import Heading from "./Heading";
import CallImg from "../images/call.svg";
import FooterIcon from "../images/hero-icon-3.svg";
import Form from "./Form";
function Footer() {
  const footerItem = [];
  return (
    <>
      {" "}
      {/* footer start */}
      <footer className="footer sec-p-t-109">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="contact-heading common-heading">
                  <span className="call-box">
                    <img
                      src={CallImg}
                      alt="call"
                      className="img-fluid call-img bx-tada"
                    />
                  </span>
                  <Heading
                    title="Contact Me."
                    para="I will read all my email one by one and I’m not going to let them missed. Send me message you want and I will reply that"
                  />
                  <img
                    src={FooterIcon}
                    alt="footer-icon"
                    className="img-fluid footer-icon bx-tada"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="form-heading">
                    <Heading footerHeading="Send Me A Message" />
                    {/* <h4 className="text-white">Send Me A Message</h4> */}
                  </div>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <span className="copyright"> All Right Reserved © 2022. </span>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8">
                <ul className="d-flex align-items-center justify-content-md-end justify-content-center p-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}

export default Footer;
