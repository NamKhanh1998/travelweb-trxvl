import "./TravelBlog.scss";
import { BlogItems } from "../../../Data";

const TravelBlog = () => {
  return (
    <div className="TravelBlog-wrapper">
      <div className="TravelBlog-title">
        Connect with other travelers in our community
      </div>

      <div className="TravelBlogs">
        {BlogItems.map((item) => (
          <div className="TravelBlog-item" key={item.title}>
            <div
              className="TravelBlog-item-img"
              style={{ background: `url(${item.img})` }}
            ></div>
            <div className="TravelBlog-item-detail">
              <div className="TravelBlog-item-title">{item.title}</div>
              <div className="TravelBlog-item-comunity">{item.comunity}</div>
              <div className="TravelBlog-item-amount">{item.travelers}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;
