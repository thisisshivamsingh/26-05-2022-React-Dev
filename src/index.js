import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

// console.log(Sdata[0].sname);
// function ncard(val) {
//   console.log(val);
// }
ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series in 2020 </h1>
    {Sdata.map((val, index) => {
      console.log(index);
      return (
        <Card
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
