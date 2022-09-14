import HorizontalItem from "./Destination/Destination";
import HotelItem from "./HotelItem/HotelItem";
import "./HorizontalList.scss";

const HorizontalList = ({ title, datas, background, type, banner }) => {
  return (
    <div className="HorizontalList-wrapper">
      <div
        className={
          "HorizontalList-title " + (background === "dark" ? "dark" : "")
        }
      >
        {title}
      </div>
      <div className="HorizontalLists">
        {datas.map((item) => {
          if (type === "hotelItem") {
            return <HotelItem item={item} key={item.title} />;
          } else {
            return (
              <HorizontalItem
                bgImg={item.img}
                title={item.title}
                key={item.title}
              />
            );
          }
        })}
        {banner && (
          <div className="banner">
            <p className="banner-title">Summer Bonanza!</p>
            <div className="banner-detail">
              <p className="banner-desc">
                Enjoy confortable transfers in shared coaches
              </p>
              <p className="banner-desc">Choose from 5 flights per week</p>
              <p className="banner-desc">
                Get a free Rapid Antigen Test at selected hotels
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalList;
