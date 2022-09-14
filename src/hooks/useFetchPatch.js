import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import authSlice from "../redux/authSlice";
import { useDispatch } from "react-redux";

const useFetchPatch = (url, id, patchData = null, call) => {
  let axiosJWT = axios.create();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("accessToken");
  const rftoken = cookies.get("refreshToken");

  const refreshToken = async (rfToken) => {
    try {
      const tokens = await axios.post(
        "/auth/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${rfToken}`,
          },
        }
      );
      return tokens;
    } catch (error) {
      if (error?.response?.data) {
        dispatch(authSlice.actions.updateMobileFailure(error?.response?.data));
      }
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp < date.getTime() / 1000) {
        const res = await refreshToken(rftoken);
        if (res) {
          cookies.set("accessToken", res.data.access_token, {
            path: "/",
          });
          cookies.set("refreshToken", res.data.refresh_token, {
            path: "/",
          });
          config.headers["Authorization"] = "Bearer " + res.data.access_token;
        } else {
          return;
        }
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(authSlice.actions.updateMobileStart());
      try {
        const res = await axiosJWT.patch(url + id, patchData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(authSlice.actions.updateMobileSuccess(res));
      } catch (error) {
        if (error?.response?.data) {
          dispatch(
            authSlice.actions.updateMobileFailure(error?.response?.data)
          );
        }
      }
    };

    if (id && call != 0) {
      fetchData();
    }
  }, [call]);
};

export default useFetchPatch;
