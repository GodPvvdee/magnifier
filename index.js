import React from "react";
import ReactDOM from "react-dom";


import SideExample from "./SideExample";

import "./style.css";

const image = require("./sample-image.jpg");

const DemoApp = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <div style={{ paddingBottom: "100px" }} className="app">
        {/* <MagnifierExample image={image} />
        <GlassExample image={image} />
        <PictureExample image={image} /> */}
        <SideExample image={image} />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<DemoApp />, document.getElementById("root"));
