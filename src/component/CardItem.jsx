import * as React from "react";

function CardItem(props) {
  // console.log(props);
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="card">
          <div className="card-img position-relative">
            <img
              src={props.custCardImg}
              className="blog-img img-fluid"
              alt="blog-img"
            />
          </div>
          <div className="card-body px-0">
            <div className="blog-img-box mb-2 d-flex align-items-center">
              <img
                src={props.custBlogerImg}
                alt="bloger-img"
                className="bloger-img"
              />
              <span className="ms-2">{props.custBlogerName}</span>
            </div>
            <h5>{props.custMainHeading}</h5>
            <h6 className="bdr">{props.custSubHeading}</h6>
            <p className="card-text">{props.custPara}</p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="card-bottom">
                <img
                  src={props.custWatch}
                  alt="watch"
                  className="blog-icon-img"
                />
                <span className="blog-content ms-1">
                  {props.custFirstHeading}
                </span>
              </div>
              <div className="card-bottom">
                <img
                  src={props.custSecondWatchImg}
                  alt="watch"
                  className="blog-icon-img"
                />
                <span className="blog-content ms-1">{props.custMinute}</span>
              </div>
              <div className="card-bottom">
                <img
                  src={props.custCalenderImg}
                  alt="watch"
                  className="blog-icon-img"
                />
                <span className="blog-content ms-1">{props.custBlogDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
