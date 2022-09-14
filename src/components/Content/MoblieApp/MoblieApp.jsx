import "./MoblieApp.scss";
import mobileBg from "../../../assets/images/mobileBg.png";
import ggPlayImg from "../../../assets/images/googleplay.png";
import appStoreImg from "../../../assets/images/appstore.png";
import ip13mockup from "../../../assets/images/ip13.png";

const MobileApp = () => {
  return (
    <div
      className="Mobile-wrapper"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${mobileBg})`,
      }}
    >
      <div className="ip13" style={{ background: `url(${ip13mockup})` }}></div>
      <div className="Mobile-content">
        <div className="Mobile-title">Your all-in-one travel app.</div>
        <div className="Mobile-desc">
          Book flights, hotels, trains & rental cars anywhere in the world in
          just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </div>
      </div>

      <div className="Mobile-detail">
        <div className="phone-email">
          <div className="phone-email-select">
            <button className="active">Mobile</button>
            <button>Email</button>
          </div>
          <div className="phone-email-desc">
            Enter your phone number to receive a text with a link to download
            the app.
          </div>
          <div className="phone-email-search">
            <input type="text" placeholder="+84 Mobile number" />
            <button>Search</button>
          </div>
        </div>

        <div className="separate">
          <div className="separate-line"></div>
          <div className="separate-text">or</div>

          <div className="separate-line"></div>
        </div>

        <div className="dowload-app">
          <div
            className="app-icon"
            style={{ background: `url(${ggPlayImg})` }}
          ></div>
          <div
            className="app-icon"
            style={{ background: `url(${appStoreImg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
