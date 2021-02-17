import axios from "axios";
import googleApiKey from "../../../.env"
// const googleApiKey = "";

export const getGoogleMap = (location, radius, type) => {
  const mapsURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    location +
    "&radius=" +
    radius +
    "&type=" +
    type +
    "&key=" +
    googleApiKey;
  return axios.get(mapsURL);
};
export const signup = (data) => axios.post("/api/user/signup", data);
export const login = (data) => axios.post("/api/user/login", data);
