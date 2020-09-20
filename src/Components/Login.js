import React from "react";
import { loginUrl } from "../spotify";
import "../Stylesheets/Login.css";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif"
        alt=""
      />

      <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;

/* http://localhost:3000/#access_token=BQC3Y_GUjrDmjEGaXVrxFgIB2QjDMFWnx0Yp8lvOBw3dJ97Sq5pWviU-NW0froTrYqzRJBbIHfeDnkGw2vcO32cgA5biWf46-izRvhT0ty_r7uZXl8BWgncsOd6KUC8DxHnBbNuv6wF6bLJp4Dts0BEN30HN5UmEuUekf-E&token_type=Bearer&expires_in=3600 */
