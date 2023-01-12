import React from "react";
import Nav from "./../../Components/SharedComponents/Nav/Nav";
import HomeFilterBtnHeader from "./../../Components/HomeFilterBtnHeader/HomeFilterBtnHeader";
import Footer from "./../../Components/SharedComponents/Footer/Footer";
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <HomeFilterBtnHeader />
      <main className="layout_container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
