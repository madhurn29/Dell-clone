import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "../Pages/Home";
import Apex from "../Pages/Apex";
import Products from "../Pages/Products";
import Solutions from "../Pages/Solutions";
import Services from "../Pages/Services";
import Support from "../Pages/Support";
import Deal from "../Pages/Deal";
import FindStore from "../Pages/FindStore";
import About from "../Pages/About";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/apex" element={<Apex />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/solutions" element={<Solutions />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/deals" element={<Deal />}></Route>
      <Route path="/findstore" element={<FindStore />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default AllRoutes;
