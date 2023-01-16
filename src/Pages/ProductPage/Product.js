import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard/ProductCard";
import "./Product.css";
import { useParams, Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = ({ allCategory }) => {
  // console.log(allCategory);
  const { slug, subSlug, subSubSlug } = useParams();
  const categories = allCategory.find((item) => item.slug === slug);
  // console.log("category : ",categories);

  const subCategories = categories?.childes?.find((item) => item.slug === subSlug);
  // console.log("sub-category : ",subCategories);

  const subSubCategories = subCategories?.childes?.find((item) => item.slug === subSubSlug);
  // console.log("sub-sub-category id: ",subSubCategories?.id);


  const [products, setProducts] = useState([]);
  // console.log(products);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://bppshop.com.bd/api/v1/categories/products/${subSubCategories.id}`).then((res) => {
      // console.log(res?.data?.data);
      setProducts(res.data.data);
      setLoading(false);
    });
  }, [subSubCategories.id]);

  return (
    <div className="categoryView-section productView-section">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb my-4">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>

          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/${slug}`}>{slug}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to={`/${slug}/${subSlug}`}>{subSlug}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {subSubSlug}
          </li>
        </ol>
      </nav>

      <div className="categoryView-container productView-container">
        <div className="category_content product-content">
          <SkeletonTheme baseColor="#DDDDDD" highlightColor="#F5F5F5">
            {loading ? (
              <>
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
                <Skeleton height="335px" borderRadius="10px" count={1} />
              </>
            ) : (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </SkeletonTheme>
        </div>
      </div>
    </div>
  );
};

export default Product;
