import React, { useState, useEffect } from "react";
import Product from "./Product";
import Heading from "./Heading";
import Loader from "./Loader";
function CardData() {
  const [products, setProducts] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    setLoader(true);
    setTimeout(() => {
      // first method for fetch api
      // fetch("https://fakestoreapi.com/products")
      //   .then((res) => res.json())
      //   .then((json) => setProducts(json));

      //second method for fetch api
      const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        console.log(res);
        setProducts(res);
      };
      fetchData();
      setLoader(false);
    }, 5000);
  }, []);

  return (
    <>
      <section className="product_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <Heading title="Products" />
            </div>
          </div>
          <div className="row position-relative">
            {loader === true ? (
              <Loader />
            ) : (
              <>
                {products &&
                  products.map((item, index) => {
                    return (
                      <>
                        <Product
                          custProId={item.id}
                          key={item.id}
                          custProImg={item.image}
                          custProTitle={item.title}
                          custProDesc={item.description}
                          custProCate={item.category}
                          custProRating={item.rating.rate}
                          custProPrice={item.price}
                        />
                      </>
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default CardData;
