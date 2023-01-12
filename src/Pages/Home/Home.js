import React from "react";
import "./Home.css";
import Category from './../CategoryPage/Category/Category';

const Home = () => {
  return (
    <>
      <div className="home_container">
        <Category />
      </div>
    </>
  );
};

export default Home;
