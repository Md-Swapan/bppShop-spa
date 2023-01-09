import React from "react";
import Nav from "../../Components/SharedComponents/Nav/Nav";
import Sidebar from "../../Components/SharedComponents/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="header_Container">
        <div className="header_btn flex justify-center align-middle">
          <button>Brand</button>
          <button>Discounted Products</button>
          <button>Seller Zone</button>
          <button>Hot Items</button>
        </div>
      </div>
    </>
  );
};

export default Home;
