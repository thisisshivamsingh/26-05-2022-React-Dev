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

import React from "react";
import ReactDOM from "react-dom";

// const flName = "shivam singh";

// ReactDOM.render(
//   <>
//     <h1> my name is {flName} </h1>
//     <p> my lucky number is {5 + 5}</p>
//   </>,
//   document.getElementById("root")
// );

const fName = "shivam";
const lName = "singh";

ReactDOM.render(
  <>
    <h1>
      my name is {fName} {lName}
    </h1>
    <p>my lucky number is {5 + 5}</p>
  </>,
  document.getElementById("root")
);
