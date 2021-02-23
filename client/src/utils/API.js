
import axios from 'axios';



const signup = (data) => axios.post('/api/user/signup', data);
const login = (data) => axios.post('/api/user/login', data);

const getTeam = (teamData) => axios.get('/api/user', teamData);
const postTeam = (teamData) => axios.post('/api/user', teamData);

export const getGoogleMap = (location, radius, type) => {
  return axios.post("/api/google/search", {location, radius, type})
  
  
// =====================================================
//   Check with the group about deleting
  
// import googleApiKey from "../../../.env"
// // const googleApiKey = "";
// >>>>>>> main

// const getGoogleMap = (location, radius, type) => {
// 	const mapsURL =
// 		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
// 		location +
// 		'&radius=' +
// 		radius +
// 		'&type=' +
// 		type +
// 		'&key=' +
// 		googleApiKey;
// 	return axios.get(mapsURL);
// };
// const signup = (data) => axios.post('/api/user/signup', data);
// const login = (data) => axios.post('/api/user/login', data);

// const getTeam = (teamData) => axios.get('/api/user/team', teamData);
// const postTeam = (teamData) => axios.post('/api/user/team', teamData);

// // <<<<<<< Nick
// export const getGoogleMap = (location, radius, type) => {
// 	const mapsURL =
// 		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
// 		//location lat & lon
// 		// "33.771713,-118.18131"
// 		location +
// 		'&radius=' +
// 		//radius in a circular meter
// 		// "1500"
// 		radius +
// 		'&type=' +
// 		//place type ie Park, Restaurant, Movie-Theater, etc
// 		// "park"
// 		type +
// 		'&key=' +
// 		googleApiKey;

// 	//  console.log("API.js " + mapsURL);
// 	return axios.get(mapsURL);

//   ==========================================================================   
  
};
// =======

export default {
	getGoogleMap,
	signup,
	login,
	getTeam,
	postTeam,
	// >>>>>>> main
};
