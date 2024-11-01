// import React from 'react';
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <ToastContainer />
      {/* This renders the child route (e.g., HomePage) */}
    </>
  );
};

export default MainLayout;
//