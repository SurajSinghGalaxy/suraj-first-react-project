import * as React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoodImg from "../images/book-img.png";
import AtomicLine from "../images/atomic-line-img.svg";
import CartImg from "../images/cart-img.svg";
import ShareIcon from "../images/share-icon.svg";
import HeroIcon3 from "../images/hero-icon-3.svg";
import Path2 from "../images/path-2.svg";
function About() {
  return (
    <>
      <section className="atomic-section" id="section-1">
        <img
          src={Path2}
          alt="path-2"
          className="atomic-path-2 d-none d-md-block"
        />
        <Container>
          <Row className="row align-items-center">
            <Col xl={5} lg={5} md={6}>
              <div className="atomic-img-box position-relative">
                <img src={BoodImg} alt="book-img" className="book-img" />
                <img
                  src={AtomicLine}
                  alt="atomic-icon-4"
                  className="atomic-icon"
                />
              </div>
            </Col>
            <Col xl={{ span: 6, offset: 1 }} lg={{ span: 5, offset: 1 }} md={6}>
              <div className="atomic-content common-heading position-relative">
                <Heading
                  mainTitle="MY BOOKS"
                  title="My Revolutionary Bullshits About “ Atomic Habit”"
                  para="Your are winners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
                />
                <div className="d-flex align-items-center">
                  <Button surajText="order now" cartImg1={CartImg} />
                  <a href="#" type="button" className="share-link">
                    <img
                      src={ShareIcon}
                      alt="share-icon"
                      className="share-icon"
                    />
                  </a>
                </div>
                <img
                  src={HeroIcon3}
                  alt="atomic-icon-3"
                  className="atomic-icon-1 bx-tada"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
