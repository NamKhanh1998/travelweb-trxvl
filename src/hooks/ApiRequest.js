import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import userSlice from "../redux/userSlice";
import authSlice from "../redux/authSlice";

const useGetProfileReq = (url, id, dispatch) => {
  const axiosJWT = axios.create();
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
      if (error.response.data) {
        const myerror = error.response.data;
        myerror.message = "TokenExpired";
        dispatch(userSlice.actions.getPrfFailure(myerror));
      }
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      if (!token) {
        const myerror = { message: "TokenNotValid" };
        dispatch(userSlice.actions.getPrfFailure(myerror));
        return;
      }
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp < date.getTime() / 1000) {
        if (!rftoken) {
          const myerror = { message: "TokenNotValid" };
          dispatch(userSlice.actions.getPrfFailure(myerror));
          return;
        }

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
      dispatch(userSlice.actions.getPrfStart());

      try {
        const res = await axiosJWT.get(url + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(userSlice.actions.getPrfSuccess(res?.data));
      } catch (error) {
        if (error?.response?.status) {
          const myerror = error.response.data;
          myerror.message = "TokenNotValid";
          dispatch(userSlice.actions.getPrfFailure(myerror));
        }
      }
    };

    if (id) {
      fetchData();
    }
  }, []);
};

//Update user mobile
//-----------------------------------------------------------------------------------------------------------

const useUpdateProfile = (url, id, patchData = null, call, dispatch) => {
  let axiosJWT = axios.create();
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
      if (error.response.data) {
        const myerror = error.response.data;
        myerror.message = "TokenExpired";
        dispatch(authSlice.actions.updateMobileFailure(myerror));
      }
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      if (!token) {
        const myerror = { message: "TokenNotValid" };
        dispatch(authSlice.actions.updateMobileFailure(myerror));
        return;
      }
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp < date.getTime() / 1000) {
        if (!rftoken) {
          const myerror = { message: "TokenNotValid" };
          dispatch(authSlice.actions.updateMobileFailure(myerror));
          return;
        }
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
        if (error?.response?.status) {
          const myerror = error.response.data;
          dispatch(authSlice.actions.updateMobileFailure(myerror));
        }
      }
    };

    if (id && patchData?.mobile && call != 0) {
      fetchData();
    }
  }, [call]);
};

//UPDATE USER PASSWORD
//-----------------------------------------------------------------------------------------------------------

const useUpdatePsw = (url, id, patchData = null, call, isConfirm, dispatch) => {
  let axiosJWT = axios.create();
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
      if (error.response.data) {
        const myerror = error.response.data;
        myerror.message = "TokenExpired";
        dispatch(userSlice.actions.updatePasswordFailure(myerror));
      }
    }
  };

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      if (!token) {
        const myerror = { message: "TokenNotValid" };
        dispatch(userSlice.actions.updatePasswordFailure(myerror));
        return;
      }
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp < date.getTime() / 1000) {
        if (!rftoken) {
          const myerror = { message: "TokenNotValid" };
          dispatch(userSlice.actions.updatePasswordFailure(myerror));
          return;
        }
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
      dispatch(userSlice.actions.updatePasswordStart());
      try {
        const res = await axiosJWT.patch(url + id, patchData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(userSlice.actions.updatePasswordSuccess());
      } catch (error) {
        if (error?.response?.status) {
          const myerror = error.response.data;
          dispatch(userSlice.actions.updatePasswordFailure(myerror));
        }
      }
    };

    if (id && patchData && call != 0 && isConfirm) {
      fetchData();
    }
  }, [call]);
};

export { useGetProfileReq, useUpdateProfile, useUpdatePsw };
