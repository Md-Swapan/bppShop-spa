import React from "react";
import HomeFilterBtnHeader from "../../Components/HomeFilterBtnHeader/HomeFilterBtnHeader";
import MainCategoryView from "../../Components/MainCategoryView/MainCategoryView";
import Footer from "../../Components/SharedComponents/Footer/Footer";
import Nav from "../../Components/SharedComponents/Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home_container">
        <HomeFilterBtnHeader />
        <MainCategoryView />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
