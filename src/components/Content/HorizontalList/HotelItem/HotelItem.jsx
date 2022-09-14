import "./HotelItem.scss";
import { AiFillStar } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

const HotelItem = ({ item }) => {
  return (
    <div className="HotelItem-container">
      <div
        className="HotelItem-img"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <BiHeart className="heart-icon" />
      </div>
      <div className="HotelItem-details">
        <div className="HotelItem-ifos">
          <div className="HotelItem-info_name-rate">
            <div className="info-name">{item.title}</div>
            <div className="info-rate">
              <AiFillStar />
              <span>{item.rating}</span>
            </div>
          </div>
          <p className="info-days">{item.days}</p>
        </div>

        <div className="HotelItem-transport">
          {item.schedule.map((schedule) => {
            const Icon = schedule.icon;
            return (
              <div className="transport-item" key={schedule.detail}>
                <Icon className="transport-icon" />
                <p>{schedule.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="HotelItem-tour">
          {item.desc.map((des) => (
            <div className="tour-item" key={des}>
              <BsDot />
              <span>{des}</span>
            </div>
          ))}
        </div>

        <div className="HotelItem-price">
          <p className="old-price">₹${item.oldPrice}</p>
          <p className="now-price">
            ₹${item.nowPrice}
            <span>Per person</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
