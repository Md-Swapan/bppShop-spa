import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Islamic from './Pages/CategoryPage/Islamic/Islamic';
import Grocery from './Pages/CategoryPage/Grocery/Grocery';
import Fashion from './Pages/CategoryPage/Fashion/Fashion';
import BabyCare from './Pages/CategoryPage/BabyCare/BabyCare';
import Shoes from './Pages/CategoryPage/Shoes/Shoes';
import Electronics from './Pages/CategoryPage/Electronics/Electronics';
import Furniture from './Pages/CategoryPage/Furniture/Furniture';
import Cosmetics from './Pages/CategoryPage/Cosmetics/Cosmetics';
import Pharmacy from './Pages/CategoryPage/Pharmacy/Pharmacy';
import EyeCare from './Pages/CategoryPage/EyeCare/EyeCare';
import Sports from './Pages/CategoryPage/Sports/Sports';
import Vehicle from './Pages/CategoryPage/Vehicle/Vehicle';
import Watch from './Pages/CategoryPage/Watch/Watch';
import UsedProducts from './Pages/CategoryPage/UsedProducts/UsedProducts';
import HomeApplianceDecorate from './Pages/CategoryPage/HomeApplianceDecorate/HomeApplianceDecorate';
import HardwareCablesSanitary from './Pages/CategoryPage/HardwareCablesSanitary/HardwareCablesSanitary';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Nav from "./Components/SharedComponents/Nav/Nav";
import Footer from "./Components/SharedComponents/Footer/Footer";
import HomeFilterBtnHeader from "./Components/HomeFilterBtnHeader/HomeFilterBtnHeader";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Nav></Nav>
      <HomeFilterBtnHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="islamic" element={<Islamic />} />
        <Route path="grocery" element={<Grocery />} />
        <Route path="fashion" element={<Fashion />} />
        <Route path="baby-care" element={<BabyCare />} />
        <Route path="cosmetics" element={<Cosmetics />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="eye-care" element={<EyeCare />} />
        <Route path="sports" element={<Sports />} />
        <Route path="watch" element={<Watch />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="home-appliance-decorate" element={<HomeApplianceDecorate />} />
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="hardware-cables-sanitary" element={<HardwareCablesSanitary />} />
        <Route path="used-product" element={<UsedProducts />} />
        {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Navigate replace to="/login" />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
