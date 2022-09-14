import "./ProfileCom.scss";
import ProfileContent from "./ProfileContent/ProfileContent";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const ProfileCom = () => {
  return (
    <div className="profile-container">
      <ProfileHeader />
      <ProfileContent />
    </div>
  );
};

export default ProfileCom;
