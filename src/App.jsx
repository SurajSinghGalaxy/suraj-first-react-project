import * as React from "react";
import Greeting from "./component/Greeting";
import Header from "./component/Header";
// import Portfolio from "./component/Portfolio";
import Blogs from "./component/Blogs";
import About from "./component/About";
import Home from "./component/Home";
// import CountExample from "./component/CountExample";
// import Tabs from "./component/Tabs";
import CardData from "./component/CardData";
import ProductSingle from "./component/ProductSingle";
import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Footer from "./component/Footer";
import Hoc from "./component/Hoc";
import { createContext } from "react";
import Context from "./component/Context";
import { useState } from "react";
import ToDoList from "./component/ToDoList";
// import Images from "./component/Images";
// import mainLogo from '../src/images/gooo-morning.jpg';

// const data = [
//   {
//     name: "Suraj Singh",
//     img: "../good-afternoon.jpg",
//     email: "suraj@gmail.com",
//     mobNo: "895124562",
//     address: "Dewas",
//     style: {
//       fontSize: "20px",
//       color: "red",
//     },
//   },
//   {
//     name: "Dipu",
//     img: "../good-afternoon.jpg",
//     email: "dipu@gmail.com",
//     mobNo: "245628951",
//     address: "Indore",
//     style: {
//       fontSize: "20px",
//       color: "red",
//     },
//   },
//   {
//     name: "Mahendra Singh",
//     img: "../good-afternoon.jpg",
//     email: "mahendra@gmail.com",
//     mobNo: "895124562",
//     address: "Satna",
//     style: {
//       fontSize: "20px",
//       color: "red",
//     },
//   },
//   {
//     name: "Vikas",
//     img: "../good-afternoon.jpg",
//     email: "vikas@gmail.com",
//     mobNo: "895124562",
//     address: "Dewas",
//     style: {
//       fontSize: "10px",
//       color: "red",
//     },
//   },
//   {
//     name: "Suraj Singh",
//     img: "../good-afternoon.jpg",
//     email: "suraj@gmail.com",
//     mobNo: "895124562",
//     address: "Dewas",
//     style: {
//       fontSize: "15px",
//       color: "red",
//     },
//   },
//   {
//     name: "Dipu",
//     img: "../good-afternoon.jpg",
//     email: "dipu@gmail.com",
//     mobNo: "245628951",
//     address: "Indore",
//     style: {
//       fontSize: "20px",
//       color: "black",
//     },
//   },
//   {
//     name: "Mahendra Singh",
//     img: "../good-afternoon.jpg",
//     email: "mahendra@gmail.com",
//     mobNo: "895124562",
//     address: "Satna",
//     style: {
//       fontSize: "20px",
//       color: "red",
//     },
//   },
//   {
//     name: "Vikas",
//     img: "../good-afternoon.jpg",
//     email: "vikas@gmail.com",
//     mobNo: "895124562",
//     address: "Dewas",
//     style: {
//       fontSize: "20px",
//       color: "red",
//     },
//   },
//   {
//     name: "mohsin",
//     img: "../good-morning.jpg",
//     email: "mohsin@gmail.com",
//     mobNo: "895124562",
//     address: "Dewas",
//     style: {
//       fontSize: "20px",
//       color: "yellow",
//     },
//   },
// ];
const data = createContext();
console.log(data);
function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Header />

      {Greeting()}
      {/* <CountExample /> */}
      {/* <Tabs /> */}

      {/* <Calculator /> */}
      {/* <Images /> */}
      {/* first method */}
      {/* <Portfolio name="Suraj Singh Parihar" email="suraj@gmail.com" address="Dewas"/> */}
      {/* <Portfolio name="Pushpendra Singh" email="pushpendraS@gmail.com" address="Dewas"/> */}
      {/* second method */}
      {/* <Portfolio name={data[0].name} email={data[0].email}/> */}
      {/* <div className="container">
        <div style={{ overflowX: "auto", width: "100%" }}>
          <table>
            <tr>
              <th>Name</th>
              <th>Images</th>
              <th>Email</th>
              <th>mobNo</th>
              <th>Address</th>
            </tr>
            {data.map((item, index) => {
              return (
                <>
                  <Portfolio
                    name={item.name}
                    surajImg={item.img}
                    email={item.email}
                    mobno={item.mobNo}
                    address={item.address}
                    fontSize={item.style.fontSize}
                    fontColor={item.style.color}
                    suraj="Read More"
                  />
                </>
              );
            })}
          </table>
        </div>
      </div> */}

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/product" element={<CardData />} />
        <Route exact path="/product/:id" element={<ProductSingle />} />
      </Routes>
      {/* <Hoc />
      <ToDoList /> */}
      <Footer />
      {/* this for data provider  */}
      {/* <data.Provider
        value={
          <>
            <h6>{count}</h6>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setcount(count + 1)}
            >
              update
            </button>
          </>
        }
      >
        <Context />
      </data.Provider> */}
    </>
  );
}

export default App;
export { data };
