import "./Categories.scss";
import { CategoryItems } from "../../../Data";
const Categories = () => {
  return (
    <div className="Categories-container">
      {CategoryItems.map((item) => (
        <div className="Categories-item" key={item.title}>
          <img src={item.img} className="Categories-item-img" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
