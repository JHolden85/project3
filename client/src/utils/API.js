<<<<<<< HEAD
import axios from "axios";
=======
/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
// <<<<<<< Nick
// // import googleApiKey from "../../"
const googleApiKey = 'AIzaSyBh52MlbJJBGNRjJP5tYFwtdEAiYxLqp2s';
>>>>>>> 8b8e4dc386e3ff91bba134dcace1e0056de6951a

  
// //1. Make a POST request to the database
// //2. Generate a GET request on the backend to post the apiKey
// //3. Make a New Post request to generate the palces api data to the front end


const getGoogleMap = (location, radius, type) => {
	const mapsURL =
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
		location +
		'&radius=' +
		radius +
		'&type=' +
		type +
		'&key=' +
		googleApiKey;
	return axios.get(mapsURL);
};
const signup = (data) => axios.post('/api/user/signup', data);
const login = (data) => axios.post('/api/user/login', data);

const getTeam = (teamData) => axios.get('/api/user', teamData);
const postTeam = (teamData) => axios.post('/api/user', teamData);

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
export default {
// 	getGoogleMap,
	signup,
	login,
	getTeam,
	postTeam,
// >>>>>>> main
};
