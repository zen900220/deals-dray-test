import React from "react";
import "./RootLayout.css";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
