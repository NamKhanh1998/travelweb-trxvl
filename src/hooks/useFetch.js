import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";

const useFetch = (url, id, call) => {
  let axiosJWT = axios.create();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [rfError, setRfError] = useState(false);

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
      setRfError(error?.response?.data);
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
      setLoading(true);
      try {
        const res = await axiosJWT.get(url + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
        setError(false);
      } catch (error) {
        setError(error?.response?.data);
      }
      setLoading(false);
    };

    if (id) {
      fetchData();
    }
  }, [call]);

  return { data, loading, error, rfError };
};

export default useFetch;
