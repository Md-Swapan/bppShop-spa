import "./Category.css";
import CategoryCard from "./../../../Components/Cards/CategoryCard/CategoryCard";
import "react-loading-skeleton/dist/skeleton.css";

const Category = ({allCategory}) => {
  // console.log(allCategory);

  return (
    <>
      <div className="categoryView-section">
        <div className="categoryView-container">
          <div className="category_content">
            {allCategory.map((category) => (
              <CategoryCard key={category.id} category={category}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
