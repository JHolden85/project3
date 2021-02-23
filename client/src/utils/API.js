import axios from "axios";

  
// //1. Make a POST request to the database
// //2. Generate a GET request on the backend to post the apiKey
// //3. Make a New Post request to generate the palces api data to the front end




export const getGoogleMap = (location, radius, type) => {
  const mapsURL =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    //location lat & lon
    // "33.771713,-118.18131" 
    location +
    "&radius=" +
    //radius in a circular meter
    // "1500" 
    radius +
    "&type=" +
    //place type ie Park, Restaurant, Movie-Theater, etc
    // "park" 
    type +
    "&key=" +
    process.env.REACT_APP_googleApiKey;
   
  //  console.log("API.js " + mapsURL);
  return axios.get(mapsURL)
  
};

export const signup = (data) => axios.post("/api/user/signup", data);
export const login = (data) => axios.post("/api/user/login", data);
