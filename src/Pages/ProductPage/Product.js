import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import "./Product.css";
import { useParams, Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const Product = ({allCategory}) => {
  console.log(allCategory);
  const { slug, subSlug, subSubSlug } = useParams();
  console.log(slug, subSlug, subSubSlug);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
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
              <Link to={`/${slug}`} >{slug}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/${slug}/${subSlug}`} >{subSlug}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {subSubSlug}
            </li>
          </ol>
        </nav>

      <div className="categoryView-container productView-container">
        <div className="category_content product-content">
         
            {
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default Product;
