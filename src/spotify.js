export const auth = `https://accounts.spotify.com/authorize`;

const redirect_uri = `http://localhost:3000/`;

const clientId = `0761db81b15f4617b297d259b33f59af`;

const scopes = [
  "user-read-playback-state",
  `user-modify-playback-state`,
  `user-read-currently-playing'`,
  `user-read-recently-played`,
  `user-top-read`,
  `user-modify-playback-state`,
];

export const getToken = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intial, item) => {
      var parts = item.split(`=`);
      intial[parts[0]] = decodeURIComponent(parts[1]);

      return intial;
    }, {});
};

export const loginUrl = `${auth}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "&20"
)}&response_type=token&show_dialog=true`;

export const tokenGet = () => {
  return new URLSearchParams(window.location.hash).get("access_token");
};
