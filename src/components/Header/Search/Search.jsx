import Button from "../../Button/Button";
import SearchBox from "../../SearchBox/SearchBox";
import "./Search.scss";
import { FiCalendar } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";

const Search = () => {
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <SearchBox />
        <div className="search-item">
          <FiCalendar className="search-item-icon" />
          <span>Check in</span>
        </div>

        <div className="search-item">
          <FiCalendar className="search-item-icon" />
          <span>Check out</span>
        </div>
        <div className="search-item">
          <BsPersonFill className="search-item-icon" />
          <span>1 room, 2 adults</span>
        </div>
        <Button title="Search" />
      </div>
    </div>
  );
};

export default Search;
