import "./SearchBox.scss";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className="SearchBox-container">
      <div className="SearchBox-Icon">
        <BsSearch />
      </div>
      <input
        type="text"
        placeholder="Search destination, hotels"
        className="SearchBox-input"
      ></input>
    </div>
  );
};

export default SearchBox;
