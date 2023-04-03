import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
function Product(props) {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-img position-relative">
            <Link to={`/product/${props.custProId}`}>
              <img
                src={props.custProImg}
                className="blog-img product-img img-fluid"
                alt="blog-img"
              />
            </Link>
          </div>
          <div className="card-body px-0">
            <h5>
              <Link to={`/product/${props.custProId}`}>
                {props.custProTitle}
              </Link>
            </h5>

            <h6 className="bdr">{props.custProCate}</h6>
            <p className="card-text">{props.custProDesc}</p>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="card-bottom">
                <span className="blog-content ms-1">
                  rating : {props.custProRating}
                </span>
              </div>
              <div className="card-bottom">
                <span className="blog-content ms-1">
                  Price : ${props.custProPrice}
                </span>
              </div>
            </div>
            <Button surajText="Add To Cart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
