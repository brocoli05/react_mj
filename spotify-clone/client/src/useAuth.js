import { useState, useEffect } from "react";
import axios from "axios"; // async and await in Javascript, client 'npm install axios'

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // refresh token automatically
  useEffect(() => {
    axios
      .post("https://localhost:3001/login", {
        code,
      })
      .then((res) => {
        // console.log(res.data);
        // Must be the same as the server.js
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        window.history.pushState({}, null, "/"); // make url "http://localhost:3000"
      })
      .catch(() => {
        window.location = "/"; // redirect the user back to the login page
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return; // prevent the refresh token as undefined error
    const interval = setInterval(() => {
      // actually refresh token
      axios
        .post("https://localhost:3001/refresh", {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        })
        .catch((err) => {
          window.location = "/"; // redirect the user back to the login page
        });
      // 1st argument-effect
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]); // 2nd argument-input code

  return accessToken;
}
