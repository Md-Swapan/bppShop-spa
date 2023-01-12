import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import "./Product.css";
import { useParams, Link, useLocation } from "react-router-dom";

const Product = () => {
  const { id, subId, productId } = useParams();
 
  const [products, setProducts] = useState([]);

  const location =useLocation();
  console.log(location);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="categoryView-section productView-section">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-4">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          {id? <Link to="/:id" >{id}</Link> : <Link to="" >{id}</Link>}
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            

            {subId? <Link to="/:id/:subId" >{subId}</Link> : <Link to="" >{subId}</Link>}
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {productId}
          </li>
        </ol>
      </nav>
      <div className="categoryView-container productView-container">
        <div className="category_content product-content">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
