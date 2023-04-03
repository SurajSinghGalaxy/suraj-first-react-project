import React, { useState, useEffect } from "react";

function ProductSingle() {
  const [products, setProducts] = useState("");
  let { pathname } = window.location;
  console.log(pathname);
  const getId = pathname.split("/")[2];
  console.log(getId);

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://fakestoreapi.com/products/" + getId)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <section className="product_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="card">
                <div className="card-img position-relative">
                  <img
                    src={products.image}
                    className="blog-img product-img img-fluid"
                    alt="blog-img"
                  />
                </div>
                <div className="card-body px-0">
                  <h5>{products.title}</h5>
                  <h6 className="bdr">{products.category}</h6>
                  <p className="card-text full-descri">
                    {products.description}
                  </p>
                  <div className="d-flex align-productss-center justify-content-between">
                    {/*  <div className="card-bottom">
                      <span className="blog-content ms-1">
                        rating :{products.rating.rate} 
                      </span>
                    </div>*/}
                    <div className="card-bottom">
                      <span className="blog-content ms-1">
                        Price : ${products.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProductSingle;
