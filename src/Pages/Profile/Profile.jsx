import { useSelector, useDispatch } from "react-redux";
import PopUp from "../../components/PopUp/PopUp";
import ProfileCom from "../../components/ProfileCom/ProfileCom";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer/Footer";
import { useGetProfileReq } from "../../hooks/ApiRequest";

const Profile = () => {
  const { user } = useSelector((state) => state.auth.login);
  const { error, loading, info } = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  useGetProfileReq("user/", user?.id, dispatch);
  return (
    <div>
      {!user && <PopUp type="loginneed" />}
      {error?.message == "TokenNotValid" && <PopUp type="accessdenied" />}
      {error?.message == "TokenExpired" && <PopUp type="timeout" />}

      {user && !error && info && (
        <>
          <ProfileCom />
          <Footer fullwidth={true} />
        </>
      )}
    </div>
  );
};

export default Profile;
