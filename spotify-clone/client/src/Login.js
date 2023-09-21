import React from "react";
import { Container } from "react-bootstrap";

//https://developer.spotify.com/documentation/web-api/tutorials/code-flow
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=48be1f84e7c8478e872e401fe1324730&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

//scope: replace any spaces with %20
/*
    streaming
    user-read-email
    user-read-private: user information
    user-library-read: user favourites
    user-library-modify: add user favourites
    user-read-playback-state: songs users play
    user-modify-palyback-state: add songs users play
  */
export default function Login() {
  return (
    // Container with one button
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success" href={AUTH_URL}>
        Login With Spotify
      </a>
    </Container>
  );
}
