import "./Content.scss";
import HorizontalList from "./HorizontalList/HorizontalList";
import Offers from "./Offer/Offer";
import { DestinationItems, PropertyTypeItems } from "../../Data";
import Plan from "./Plan/Plan";
import PlanImg from "../../assets/images/map.png";
import TravelBlog from "./TravelBlog/TravelBlog";
import MobileApp from "./MoblieApp/MoblieApp";

const Content = () => {
  return (
    <div className="Content-wrapper">
      <HorizontalList
        title="Top Vacation Destinations"
        datas={DestinationItems}
      />
      <Offers />
      <HorizontalList
        title="Browse by property type"
        datas={PropertyTypeItems}
        background="dark"
      />
      <Plan
        bgImg={PlanImg}
        title="Plan your trip with travel expert"
        desc="Our professional advisors can craft your perfect itinerary"
      />
      <TravelBlog />
      <MobileApp />
    </div>
  );
};

export default Content;
