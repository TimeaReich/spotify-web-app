import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=01be71b4fd304e06930cbde1b7adc034&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
export default function Login() {
  return (
    <div>
      <a href={AUTH_URL}>
        <button className="button">Login With Spotify</button>
      </a>
    </div>
  );
}
