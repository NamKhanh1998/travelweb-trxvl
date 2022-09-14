import "./Hotels.scss";
import Header from "../../components/Header/Header";
import bgImg from "../../assets/images/image2.png";
import { navItems } from "../../Data";
import HotelsContent from "../../components/HotelsContent/HotelsContent";
import Footer from "../../components/Footer/Footer";

const Hotels = () => {
  return (
    <div>
      <Header bgImg={bgImg} navItems={navItems} />
      <HotelsContent />
      <div className="Hotels-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
