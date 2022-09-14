import Categories from "./Categories/Categories";
import "./Header.scss";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";

const Header = ({ bgImg, navItems }) => {
  return (
    <div className="wrapper">
      <div
        className="container"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 13.65%), url(${bgImg})`,
        }}
      >
        <Navbar navItems={navItems} />
        <div className="header-title">
          <span>The whole worlds</span>
          <span>awaits</span>
        </div>
        <div className="header-search">
          <Search />
        </div>
        <div className="header-categories">
          <span>Top categories</span>
        </div>

        <div className="header-categories-wrapper">
          <Categories />
        </div>

        <div className="blur-layout"></div>
      </div>
    </div>
  );
};

export default Header;
