// var React = require("react");
// var ReactDOM = require("react-dom");
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   "kya dikhana hain what to show",
//   "kaha dikhana hain where to show",
//   "callback function"
// );

// v16.x.x

// const arr = ["shivam", "kumar", "singh"];
// In React v16 it's possible for render()
// to return an array of elements.
// ReactDOM.render(
//   <>
//     <h1>Shivam Singh</h1>
//     <p>Plz like and share to all</p>
//     <h2>plz subscribe my channel</h2>
//   </>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   /*#__PURE__*/ React.createElement("h1", null, "Shivam Singh Like"),
//   document.getElementById("root")
// );

// var h1 = document.createElement("h1");
// h1.innerHTML = "Shivam Singh Subscribe";
// document.getElementById("root").appendChild(h1);

////////////////////// Javascript Expressions in JSX in React JS #10 /////////////////////

// import React from "react";
// import ReactDOM from "react-dom";

// const flName = "shivam singh";

// ReactDOM.render(
//   <>
//     <h1> my name is {flName} </h1>
//     <p> my lucky number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

// const fName = "shivam";
// const lName = "singh";

// ReactDOM.render(
//   <>
//     <h1>{`my first name is ${fName} and my last name is ${lName}`}</h1>
//     {/* <h1>my name is {fName + " " + lName}</h1> */}
//     {/* <h1>
//       my name is {fName} {lName}
//     </h1> */}
//     <p>my lucky number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const name = "shivam";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.thapatechnical.com";
// .heading {
//   color: #fa9191;
//   text-align: center;
//   text-transform: capitalize;
//   font-weight: bold;
//   text-shadow: 0px 2px 4px #ffe9c5;
//   margin: 70px 0;
//   font-family: "Josefin Sans", sans-serif;
// }
const heading = {
  color: "#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin: "70px 0",
  fontFamily: '"Josefin Sans", sans-serif',
};
ReactDOM.render(
  <>
    <h1 style={heading}>my name is {name}</h1>,
    <div className="img_div">
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <a href={links} target="_thapa">
        <img src={img3} alt="randomImages" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
