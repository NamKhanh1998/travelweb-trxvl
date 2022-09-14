import "./navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import authSlice from "../../../redux/authSlice";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Navbar = ({ navItems }) => {
  const { user } = useSelector((state) => state.auth.login);
  const cookies = new Cookies();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const email = location.search.slice(1);
      try {
        dispatch(authSlice.actions.loginStart());

        const res = await axios.post(`auth/email`, { email: email });
        await cookies.set("accessToken", res.data.token.access_token, {
          path: "/",
        });
        await cookies.set("refreshToken", res.data.token.refresh_token, {
          path: "/",
        });

        const userLocalstorage = JSON.stringify({
          user: res.data.user,
          expiry: new Date().getTime() + 60000 * 20,
        });
        localStorage.setItem("user", userLocalstorage);
        dispatch(authSlice.actions.logInSuccess(res.data.user));
      } catch (error) {
        dispatch(authSlice.actions.logInFailure(error.response.data));
      }
    };
    if (location.search) {
      fetch();
    }
  }, [location]);

  //Handle Func
  const logout = async () => {
    dispatch(authSlice.actions.logOut());
    localStorage.clear("user");
    cookies.remove("refreshToken", { path: "/" });
    cookies.remove("accessToken", { path: "/" });
    navigate("/Signin", { state: { animation: true } });
  };

  return (
    <div className="Nav-wrapper">
      <div className="Nav-container">
        <div className="nav-logo">trxvl.</div>

        <div className="nav-items">
          {navItems.map((item) => (
            <div key={item.title} className="nav-item-wrapper">
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  isActive ? "nav-item-boder" : "nav-item"
                }
              >
                {item.title}
              </NavLink>
            </div>
          ))}

          {user ? (
            <>
              <div className="nav-item-wrapper">
                <NavLink to="/profile" className="nav-item ">
                  Hello, <span className="username">{user.username}</span>
                </NavLink>
              </div>

              <div className="nav-item-wrapper" onClick={logout}>
                <div className="nav-item lg">
                  <p>Logout</p>
                  <MdLogout />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="nav-item-wrapper">
                <NavLink
                  to="/SignUp"
                  className={({ isActive }) =>
                    isActive ? "nav-item-boder" : "nav-item"
                  }
                  style={{ fontWeight: 700 }}
                >
                  Sign Up
                </NavLink>
              </div>
              <div className="nav-item-wrapper">
                <NavLink
                  to="/Signin"
                  className={({ isActive }) =>
                    isActive ? "nav-item-boder" : "nav-item"
                  }
                  style={{ fontWeight: 700 }}
                >
                  Sign In
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
