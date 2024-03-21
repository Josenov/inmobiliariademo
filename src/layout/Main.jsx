import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


import React from 'react'
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  return (
    <>
        <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    

    </>
  )
}

export default Main