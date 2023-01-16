import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import SubCategory from "./Pages/CategoryPage/SubCategory/SubCategory";
import SubSubCategory from "./Pages/CategoryPage/SubSubCategory/SubSubCategory";
import Product from "./Pages/ProductPage/Product";
import axios from 'axios';

function App() {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://bppshop.com.bd/api/v1/categories`)
    .then((res) => {
      setAllCategory(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home allCategory={allCategory} loading={loading}/>} />
            <Route path="/:slug" element={<SubCategory />} />
            <Route path="/:slug/:subId" element={<SubSubCategory />} />
            <Route path="/:id/:subId/:productId" element={<Product />} />
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
