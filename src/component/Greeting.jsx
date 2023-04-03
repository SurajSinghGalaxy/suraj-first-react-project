import React from "react";
let date = new Date();
console.log(date);
let hour = date.getHours();
console.log(hour);
// let data=""
// if(hour >=0 && hour <12){
//     data="Good Morning";
//     console.log("Mor")
// }else if(hour >=12 && hour<16){
//     data="Good Afternoon"
//     console.log("a");
// }else if(hour>=16 && hour[0]<20){
//     data="Good Evening"
//     console.log("e")
// }else{
//     data="Good Night";
//     console.log("n")}
function Greeting() {
  return (
    <>
      <section
        className="box"
        style={{
          backgroundImage:
            hour >= 0 && hour < 12
              ? `url("./good-morning.jpg")`
              : hour >= 12 && hour < 16
              ? `url("./good-afternoon.jpg")`
              : hour >= 16 && hour < 20
              ? `url("./good-evening.jpg")`
              : `url("./good-night.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <h1 style={{ textAlign: "center" }}>
                  Hello, Welcome My Page
                  {hour >= 0 && hour < 12 ? (
                    <span className="ms-2" style={{ color: "#E67451" }}>
                      Good Morning
                    </span>
                  ) : hour >= 12 && hour < 16 ? (
                    <span className="ms-2" style={{ color: "#ffd27f" }}>
                      Good Afternoon
                    </span>
                  ) : hour >= 16 && hour < 20 ? (
                    <span className="ms-2" style={{ color: "#FAD6A5" }}>
                      Good Evening
                    </span>
                  ) : (
                    <span className="ms-2" style={{ color: "#ccc" }}>
                      Good Night
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Greeting;
