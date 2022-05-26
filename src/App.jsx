// import React from "react";
// import Heading from "./Heading";
// import Para from "./Para";
// import List from "./List";

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Para />
//     </>
//   );
// }
// export default App;

/////////////// ES6 Modules Import Export in React Js #20 ///////////////

const youtuber = "gareeb clasher";
const favprog = "React js";

function myName() {
  let name = "shivam";
  return name;
}
function myNames() {
  let names = "shivam singh";
  return names;
}
export default youtuber;
export { favprog, myName, myNames };
