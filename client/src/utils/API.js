import axios from "axios";
// <<<<<<< Nick
// // import googleApiKey from "../../"
//  const googleApiKey = "AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s";

// //1. Make a POST request to the database
// //2. Generate a GET request on the backend to post the apiKey
// //3. Make a New Post request to generate the palces api data to the front end

// =======
// import googleApiKey from "../../../.env"
// // const googleApiKey = "";
// >>>>>>> main

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
