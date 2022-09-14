import "./Offer.scss";
import { OffersItems } from "../../../Data";

const Offers = () => {
  return (
    <div className="Offers-wrapper">
      <div className="Offers-title">Offers</div>

      <div className="Offers">
        <div className="Offer-container">
          {OffersItems.map((item) => (
            <div className="offer" key={item.title}>
              <div
                className="offer-img"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="offer-info">
                <div className="offer-info-title">{item.title}</div>
                <div className="offer-info-content">{item.content}</div>
                <div className="offer-info-detail">{item.detail}</div>
                <button className="offer-btn">Book now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
