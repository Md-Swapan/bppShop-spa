import React from "react";
import "./Home.css";
import Category from './../CategoryPage/Category/Category';

const Home = ({allCategory}) => {
  // console.log(allCategory);
  return (
    <>
      <div className="home_container">
        <Category allCategory={allCategory}/>
      </div>
    </>
  );
};

export default Home;
