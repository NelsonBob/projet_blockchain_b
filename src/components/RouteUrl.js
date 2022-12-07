import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import Login from "../screens/Login";
import { Money } from "../screens/Money";
import { Page404 } from "../screens/Page404";

const RouteUrl = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/money" element={<Money />} />
        <Route exact path="/404" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteUrl;
