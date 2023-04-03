import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShopIcon from "../images/shop-icon-img.svg";
import HeroIcon3 from "../images/hero-icon-3.svg";
import Heading from "./Heading";
import ShopImg from "../images/shop-img.png";
import RightArrow from "../images/right-arrow.svg";
import Path3 from "../images/path-3.svg";
import Path4 from "../images/path-4.svg";
function Shop() {
  return (
    <>
      <section className="shop-section position-relative">
        <img
          src={Path3}
          alt="path-3"
          className="shop-path-3 d-none d-md-block"
        />
        <img
          src={Path4}
          alt="path-4"
          className="shop-path-4 d-none d-md-block"
        />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className="shop-content common-heading">
                <img
                  src={ShopIcon}
                  alt="shop-img"
                  className="shop-img img-fluid"
                />
                <Heading
                  title="Productivity Shop"
                  para=" Your are winners Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,"
                  para1="Your are winners Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua."
                  content="button OK?"
                />

                <div className="btn-shadow">
                  <a href="#" className="btn btn-secondry">
                    <span>Get to store</span>
                    <img
                      src={RightArrow}
                      alt="right-arrow"
                      className="right-arrow"
                    />
                  </a>
                </div>
                <img
                  src={HeroIcon3}
                  alt="shop-icon"
                  className="shop-icon-img bx-tada"
                />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} className="position-relative">
              <div className="shop-img-box">
                <span className="bg-1" />
                <span className="bg-2" />
                <img src={ShopImg} alt="shop-img" className="clothes-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Shop;
