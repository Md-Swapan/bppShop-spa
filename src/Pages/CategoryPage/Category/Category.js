import "./Category.css";
import CategoryCard from "./../../../Components/Cards/CategoryCard/CategoryCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Category = ({ allCategory, loading }) => {

  return (
    <>
      <div className="categoryView-section">
        <div className="categoryView-container">
          <div className="category_content">
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
                allCategory?.map((category) => (
                  <CategoryCard key={category?.id} category={category} />
                ))
              )}
            </SkeletonTheme>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
