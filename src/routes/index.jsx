import React from "react";
import Test2 from "../pages/test2";
import Test1 from "../pages/test";
const routes = [
  {
    path: "/films",
    element: <Test2></Test2>,
  },
  {
    path: "/",
    element: <Test1></Test1>,
  },
];
export default routes;
