import * as React from "react";
import CardItem from "./CardItem";
import Heading from "./Heading";
import cardData from "../Data";

function Blogs() {
  return (
    <>
      {/* blog section css start */}
      <div className="blog-section sec-p-t-120">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blog-heading common-heading">
                {/* <h3 className="bdr mb-0">Blog</h3> */}
                <Heading title="Blog" />
              </div>
            </div>
            {cardData.map((cardItem, index) => {
              return (
                <>
                  <CardItem
                    custId={cardItem.id}
                    custCardImg={cardItem.cardImg}
                    custBlogerImg={cardItem.blogerImg}
                    custBlogerName={cardItem.blogerName}
                    custMainHeading={cardItem.blogerHeading}
                    custSubHeading={cardItem.blogSubHeading}
                    custPara={cardItem.blogPara}
                    custWatch={cardItem.blogWatch}
                    custFirstHeading={cardItem.blogFirstHeading}
                    custSecondWatchImg={cardItem.blogSecondWatch}
                    custMinute={cardItem.blogMinute}
                    custCalenderImg={cardItem.blogCalenderImg}
                    custBlogDate={cardItem.blogDate}
                    key={cardItem.id}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
      {/* blog section css end */}
    </>
  );
}

export default Blogs;
