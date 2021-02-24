/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const googleApiKey = 'AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s';

export const signup = (data) => axios.post('/api/user/signup', data);
export const login = (data) => axios.post('/api/user/login', data);

export const getTeam = (teamData) => axios.get('/api/user', teamData);
export const postTeam = (teamData) => axios.post('/api/user', teamData);

// <<<<<<< Nick
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
  
// =======
// export default {
// // 	getGoogleMap,
// 	signup,
// 	login,
// 	getTeam,
// 	postTeam,
// // >>>>>>> main
};
