import React from "react";
import ReactDOM from "react-dom/client";

// episode-2
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
//     React.createElement("h1", { key: "h1-child1" }, "I am an H1 tag"),
//     React.createElement("h2", { key: "h2-child1" }, "I am an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h1-child2" }, "I am an H1 tag"),
//     React.createElement("h2", { key: "h2-child2" }, "I am an H2 tag"),
//   ]),
// ]);

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React Element
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React..."
// );

// episode-3
const heading = (
  <h1 id="heading" className="head">
    Namaste React Learnings with JSX
  </h1>
);

//  React Components
// react component through function
const Title = function () {
  return <h1> this is title</h1>;
};

// react component through arrow function
const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>Namaste React Functional component</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
