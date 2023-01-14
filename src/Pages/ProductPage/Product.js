import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import "./Product.css";
import { useParams, Link, useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const { id, subId, productId } = useParams();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="categoryView-section productView-section">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb my-4">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {id ? <Link to="/:id">{id}</Link> : <Link to="">{id}</Link>}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {subId ? (
              <Link to="/:id/:subId">{subId}</Link>
            ) : (
              <Link to="">{subId}</Link>
            )}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {productId}
          </li>
        </ol>
      </nav>
      <div className="categoryView-container productView-container">
        {/* <div className="category_content product-content">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            
          ))}
        </div> */}
        {/* </div> */}

        <SkeletonTheme baseColor="#dfdfdf" highlightColor="#f5f5f5">
          {loading ? (
            <>
              <Skeleton height="100px" borderRadius="10px" count={1} />
            </>
          ) : (
            <div className="category_content product-content">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </SkeletonTheme>
      </div>
    </div>
  );
};

export default Product;
