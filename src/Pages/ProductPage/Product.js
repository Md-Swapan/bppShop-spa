import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    // <div className="product-container">
    //   {products.map((product) => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>

    <div className="categoryView-section productView-section">
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
