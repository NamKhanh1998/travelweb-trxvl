import "./ProfileHeader.scss";
import { AiFillHome, AiFillSetting, AiFillMail } from "react-icons/ai";
import avaImg from "../../../assets/images/Profile/ava.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth.login);

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      {user && (
        <div className="profile-header">
          <div className="profile-ava">
            <div
              className="ava-img"
              style={{ background: `url(${avaImg})` }}
            ></div>
            <div className="profile-name">
              <h1>{user.username}</h1>
            </div>
          </div>
          <div className="profile-menu">
            <div className="profile-menu-item" onClick={goHome}>
              <AiFillHome className="profile-menu-item-icon" />
              <span>Home</span>
            </div>
            <div className="profile-menu-item">
              <AiFillMail className="profile-menu-item-icon" />
              <span>Message</span>
            </div>
            <div className="profile-menu-item">
              <AiFillSetting className="profile-menu-item-icon" />
              <span>Settings</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileHeader;
