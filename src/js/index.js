import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "../css/custom.scss";
import App from "./app";

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));
