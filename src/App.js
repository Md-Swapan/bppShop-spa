import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Layout from "./Pages/Layout/Layout";
import SubCategory from "./Pages/CategoryPage/SubCategory/SubCategory";
import SubSubCategory from "./Pages/CategoryPage/SubSubCategory/SubSubCategory";
import Product from './Pages/ProductPage/Product';
import axios from "axios";
import { baseUrl } from "./BaseUrl/BaseUrl";

import { getCategories } from "./Redux/Actions/CategoriesAction";
import { useDispatch, useSelector,  } from "react-redux";


function App() {
  const [loading,setLoading]=useState(true);
  const [allCategory, setAllCategory] = useState([]);

  const dispatch = useDispatch()
  // dispatch(getCategories)

  useEffect(() => {
    axios.get(`${baseUrl}/categories`).then((res) => {
      setAllCategory(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home allCategory={allCategory} loading={loading}/>} />
          <Route path="/:slug" element={<SubCategory allCategory={allCategory} loading={loading}/>}/>
          <Route path="/:slug/:subSlug" element={<SubSubCategory allCategory={allCategory} loading={loading}/>} />
          <Route path="/:slug/:subSlug/:subSubSlug" element={<Product allCategory={allCategory}/>} />
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
