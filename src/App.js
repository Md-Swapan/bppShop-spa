import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import SubCategory from "./Pages/CategoryPage/SubCategory/SubCategory";
import SubSubCategory from './Pages/CategoryPage/SubSubCategory/SubSubCategory';


function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SubCategory />} />
          
          <Route path="/:id" element={<SubSubCategory />} />
          <Route path="*" element={<PageNotFound />} />

          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Routes path="/" element={<Navigate replace to="/login" />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
