import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ catagories }) => {
  return (
    <div className="directory-container">
      {catagories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
