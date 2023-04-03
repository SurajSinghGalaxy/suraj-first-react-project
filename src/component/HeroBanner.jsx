import * as React from "react";
import HeroImg from "../images/hero-img.png";
import HeroIcon3 from "../images/hero-icon-3.svg";
import HeroIcon4 from "../images/hero-icon-4.svg";
import HeroLine1 from "../images/hero-line-1.svg";
import HeroLine2 from "../images/hero-line-2.svg";
import DownArrow from "../images/down-arrow.svg";
import HeroPath1 from "../images/hero-path-1.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function HeroBanner(props) {
  const handleClickScroll = () => {
    let scrollElement = document.getElementById("section-1");
    if (scrollElement) {
      scrollElement.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      {/* hero banner section start */}
      <section className="hero-banner">
        <img
          src={HeroPath1}
          alt="hero-path-1"
          className="hero-path-1 d-none d-md-block"
        />
        <Container>
          <Row className="align-items-center">
            <Col xl={6} md={12} lg={6}>
              <div className="hero-banner-heading">
                <h1>{props.custHeroHeading}</h1>
                <p className="bdr">
                  {props.custHeroPara}
                  <span className="welcome ms-2">{props.custMiniPara}</span>
                </p>
                <i>{props.custSubHeading}</i>
                <a
                  id="arrowBtn"
                  className="d-flex align-items-center scroll-down"
                  onClick={handleClickScroll}
                  style={{ cursor: "pointer" }}
                >
                  <span className="scroll-box d-flex align-items-center justify-content-center">
                    <img
                      src={DownArrow}
                      alt="down-arrow"
                      className="img-fluid down-arrow"
                    />
                  </span>
                  <span className="scroll-content">{props.custScroll}</span>
                </a>
              </div>
            </Col>
            <Col md={12} xl={5} lg={{ span: 5, offset: 1 }}>
              <div className="hero-img-box position-relative">
                <img
                  src={HeroImg}
                  alt="hero-img"
                  className="img-fluid hero-img"
                />
                <svg
                  width={115}
                  height={87}
                  viewBox="0 0 115 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="hero-icon-first"
                  alt="hero-icon-1"
                  className="hero-icon-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110.57 3.81002C96.9862 1.06519 81.4543 5.58064 70.1121 13.0644C59.2563 20.2273 47.5731 33.4258 51.3789 47.4702C52.7655 52.5845 57.2086 56.8422 62.7171 54.3484C67.8332 52.033 69.3153 46.1217 66.8045 41.3193C60.0248 28.3492 40.5101 34.5002 31.2269 40.842C25.3582 44.8515 20.4553 50.2472 17.0516 56.473C13.8939 62.2491 11.227 69.6445 12.2053 76.2919C12.3455 77.2464 13.9606 77.2256 14.1212 76.2919C14.9796 71.2992 15.402 66.4939 17.3513 61.7404C19.3718 56.8112 22.3995 52.2812 26.099 48.4456C33.438 40.8392 45.5096 34.2633 56.4435 36.5646C62.2382 37.7842 69.429 45.031 63.9301 50.7407C61.6998 53.0562 58.127 53.6679 55.766 51.2034C53.6104 48.9527 52.9685 45.3569 52.9397 42.37C52.8232 30.2211 62.9637 19.8738 72.5924 13.7831C78.0381 10.3392 84.0482 7.81725 90.3201 6.3151C97.0315 4.70771 103.573 4.73135 110.41 4.98686C111.079 5.01163 111.242 3.94622 110.57 3.81002Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M114.601 3.54926C100.728 -2.98127 84.2582 -0.0908432 72.1189 8.8736C66.278 13.1874 61.3699 18.6614 57.3911 24.7457C53.3291 30.9564 49.2356 38.4572 48.7875 46.0317C48.4755 51.3141 51.2135 59.8787 58.0106 58.736C63.9909 57.7312 69.2881 50.5984 69.2414 44.6525C69.1892 37.9939 63.079 33.4583 57.0223 32.6417C49.795 31.6675 42.1489 34.7036 35.9673 38.261C22.4376 46.0447 12.5657 59.9989 10.0183 75.5211C9.77602 77.0001 12.0114 77.6454 12.2717 76.1472C14.2231 64.9008 19.8605 54.6423 28.2037 46.9311C32.4563 43.0006 37.4021 39.7779 42.7448 37.5731C48.864 35.0473 56.6034 33.0478 62.5545 37.0298C69.1217 41.4241 67.5649 49.4342 62.1969 54.0979C59.0625 56.821 55.1726 57.8383 52.5701 53.7843C50.4567 50.4924 50.6389 46.0992 51.5188 42.437C54.336 30.7017 62.7023 19.0278 72.0098 11.6234C83.6802 2.3391 99.9159 -1.40648 113.824 4.88927C114.716 5.29304 115.503 3.974 114.601 3.54926Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.5078 65.7931C20.0781 67.7028 17.9155 69.9899 15.6729 72.1056C14.6118 73.1072 13.5508 74.1082 12.4904 75.1091C11.999 75.5715 9.72541 78.2916 9.05939 78.137C8.71623 78.0563 8.02429 74.47 7.89356 74.006C7.50477 72.6293 7.11597 71.2527 6.72774 69.8761C5.9693 67.1907 5.58389 63.774 3.92953 61.4726C3.33845 60.6501 2.0836 60.9528 2.01429 61.9814C1.88526 63.8856 2.65834 65.6788 3.18857 67.4984C3.7881 69.5595 4.38876 71.6195 4.9883 73.6806C5.54388 75.5881 5.89718 80.2748 8.35335 80.9322C10.6985 81.5592 13.1198 77.6657 14.4941 76.3084C17.5819 73.2602 20.9667 70.329 23.7598 67.0206C24.4929 66.1516 23.3958 65.0954 22.5078 65.7931Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.8476 65.6363C18.725 68.2218 17.2417 71.4564 15.4199 74.281C13.3074 77.555 11.0799 80.793 8.52676 83.7213C9.26147 83.9206 9.99618 84.1194 10.7303 84.3181C9.70263 80.8061 8.81642 77.2497 8.12333 73.6523C7.44855 70.1534 7.54122 66.1671 6.35648 62.8373C6.01243 61.8681 4.35212 61.5828 4.15068 62.8373C3.61685 66.1716 4.62569 70.0971 5.24165 73.3835C5.98191 77.3352 6.97909 81.2099 8.18826 85.0379C8.55339 86.1946 9.94734 86.3158 10.5977 85.3608C12.7558 82.19 14.9999 79.0948 17.0159 75.8226C18.8293 72.8801 21.0235 69.6711 21.9757 66.31C22.1555 65.6762 21.2926 65.0936 20.8476 65.6363Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.2677 62.7111C16.6437 70.1376 12.0564 77.5893 7.35013 84.9631C8.16606 85.0708 8.98142 85.1795 9.79622 85.2877C8.27086 81.4554 6.77762 77.6248 5.52725 73.6889C4.37661 70.0672 3.82439 65.9824 2.16379 62.58C1.63975 61.5044 -0.00281334 62.0539 3.8147e-06 63.1753C0.0101471 67.1049 1.72653 71.2813 2.9476 74.9699C4.22446 78.828 5.66305 82.6426 7.35013 86.3352C7.78401 87.2837 9.19329 87.1572 9.66155 86.3352C13.9925 78.7353 18.4469 71.2069 22.8618 63.6578C23.4721 62.6149 21.901 61.6927 21.2677 62.7111Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width={76}
                  height={88}
                  viewBox="0 0 76 88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="hero-icon-2"
                  className="hero-icon-2 bx-tada"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.60773 70.9089C24.3914 80.0216 44.5739 74.6138 53.6866 58.8301C62.7993 43.0464 57.3914 22.864 41.6077 13.7513L8.60773 70.9089Z"
                    fill="#A6A6A6"
                  />
                  <mask id="path-2-inside-1_1339_218" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.81348 57.7488C21.5971 66.8615 41.7796 61.4536 50.8923 45.6699C60.005 29.8863 54.5971 9.7038 38.8135 0.591104L5.81348 57.7488Z"
                    />
                  </mask>
                  <path
                    d="M5.81348 57.7488L4.08143 56.7488L3.08143 58.4808L4.81348 59.4808L5.81348 57.7488ZM38.8135 0.591104L39.8135 -1.14095L38.0814 -2.14095L37.0814 -0.408896L38.8135 0.591104ZM49.1603 44.6699C40.5998 59.497 21.6405 64.5771 6.81348 56.0167L4.81348 59.4808C21.5537 69.1458 42.9594 63.4102 52.6244 46.6699L49.1603 44.6699ZM37.8135 2.32315C52.6405 10.8836 57.7207 29.8429 49.1603 44.6699L52.6244 46.6699C62.2893 29.9297 56.5537 8.52404 39.8135 -1.14095L37.8135 2.32315ZM37.0814 -0.408896L4.08143 56.7488L7.54553 58.7488L40.5455 1.5911L37.0814 -0.408896Z"
                    fill="black"
                    mask="url(#path-2-inside-1_1339_218)"
                  />
                </svg>
                <img
                  src={HeroIcon3}
                  alt="hero-icon-3"
                  className="hero-icon-3 bx-tada"
                />
                <img
                  src={HeroIcon4}
                  alt="hero-icon-4"
                  className="hero-icon-4"
                />
                <img
                  src={HeroLine1}
                  alt="hero-line-1"
                  className="hero-line-1"
                />
                <img
                  src={HeroLine2}
                  alt="hero-line-2"
                  className="hero-line-2"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* hero banner section end */}
    </>
  );
}
export default HeroBanner;
