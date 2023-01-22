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
import VostroList from "../Pages/VostroList";
import AddAddress from "../Pages/AddAddress";
import Checkout from "../Pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import ThankYou from "../Pages/ThankYou";
import AdminPage from "../Pages/AdminPage";
import PageNotFound from "../Pages/PageNotFound";

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
      <Route path="/VostroList" element={<VostroList />}></Route>
      <Route
        path="/InspironList/:id"
        element={
          <SingleProductPage route={`inspiron`} routeName={"Inspiron"} />
        }
      ></Route>
      <Route
        path="/VostroList/:id"
        element={<SingleProductPage route={`vostro`} routeName={"Vostro"} />}
      ></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>

      <Route
        path="/address"
        element={
          <PrivateRoute>
            <AddAddress />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/thankyou" element={<ThankYou />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>

    </Routes>
  );
}

export default AllRoutes;
