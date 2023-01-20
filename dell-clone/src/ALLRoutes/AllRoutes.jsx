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
import InspironList from "../Pages/InspironList";
import SingleProductPage from "../Components/InspironListComponent/SingleProductPage";
import Cart from "../Pages/Cart";
import SignIn from "../Pages/Login";
import SignUp from "../Pages/SignUp";

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
      <Route path="/InspironList" element={<InspironList />}></Route>
      <Route path="/InspironList/:id" element={<SingleProductPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

    </Routes>
  );
}

export default AllRoutes;
