import React from "react";
import "./Home.css";
import Category from './../CategoryPage/Category/Category';

const Home = ({allCategory,loading}) => {
  return (
    <>
      <div className="home_container">
        <Category allCategory={allCategory} loading={loading}/>

        
      </div>
    </>
  );
};

export default Home;
