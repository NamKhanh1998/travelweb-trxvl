import "./HotelsContent.scss";
import {
  BeachDestinations,
  RecentlyViewed,
  PackageItems,
  HoneymoonItems,
} from "../../Data";
import HorizontalList from "../Content/HorizontalList/HorizontalList";

const HotelsContent = () => {
  return (
    <div className="Hotel-Content-wrapper">
      <HorizontalList
        title="Popular Beach Destinations"
        datas={BeachDestinations}
        type="hotelItem"
      />

      <HorizontalList
        title="Recently Viewed"
        datas={RecentlyViewed}
        type="hotelItem"
        background="dark"
        banner={true}
      />
      <HorizontalList
        title="All Inclusive Packages!"
        datas={PackageItems}
        type="hotelItem"
        background="dark"
      />
      <HorizontalList
        title="Honeymoon Freebies Special"
        datas={HoneymoonItems}
        type="hotelItem"
        background="dark"
      />
    </div>
  );
};

export default HotelsContent;
