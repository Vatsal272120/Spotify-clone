import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import { getToken, tokenGet } from "./spotify";

const spotify = new SpotifyWebApi(); // instance of spotify

function App() {
  const [token, setToken] = useState(null);

  // makes use of token and sets it to setToken  and spotify
  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("🧔", user);
      });
    }

    console.log(_token);
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
