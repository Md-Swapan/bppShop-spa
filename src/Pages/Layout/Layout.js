import React from "react";
import Nav from "./../../Components/SharedComponents/Nav/Nav";
import HomeFilterBtnHeader from "./../../Components/HomeFilterBtnHeader/HomeFilterBtnHeader";
import Footer from "./../../Components/SharedComponents/Footer/Footer";
import "./Layout.css";
import Cart from "../../Components/SharedComponents/Cart/Cart";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <HomeFilterBtnHeader />
      <main className="layout_container">{children}</main>
      <Cart />
      <Footer />
    </div>
  );
};

export default Layout;
