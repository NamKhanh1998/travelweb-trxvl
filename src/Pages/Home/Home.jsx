import React from "react";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.scss";
import BgImg from "../../assets/images/image1.png";
import { navItems } from "../../Data";
const Home = () => {
  return (
    <div>
      <Header bgImg={BgImg} navItems={navItems} />
      <Content />
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
