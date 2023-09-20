const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;

  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "48be1f84e7c8478e872e401fe1324730",
    clientSecret: "72f119c379134dd78ec9da9e91cfbc88",
  });

  // refresh token
  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res
      .json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  });
});
