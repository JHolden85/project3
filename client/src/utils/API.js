import axios from 'axios';

// API Key that is loaded in .env file
const googleApiKey = process.env.REACT_APP_googleApiKey;
// User routes
const signup = (data) => axios.post('/api/user/signup', data);
const login = (data) => axios.post('/api/user/login', data);

const getTeam = (teamData) => axios.get('/api/user/team', teamData);
const postTeam = (teamData) => axios.post('/api/user/team', teamData);

const getUser = () => axios.get('/api/user/current_user');
const logout = () => axios.get('/api/user/logout');

// const signup = (data) => axios.post('/api/user/signup', data);
// const login = (data) => axios.post('/api/user/login', data);

// const getTeam = (teamData) => axios.get('/api/user/team', teamData);
// const postTeam = (teamData) => axios.post('/api/user/team', teamData);
export const getGoogleMap = (location, radius, type) => {
	const mapsURL =
		'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
		//location lat & lon
		// "33.771713,-118.18131"
		location +
		'&radius=' +
		//radius in a circular meter
		// "1500"
		radius +
		'&type=' +
		//place type ie Park, Restaurant, Movie-Theater, etc
		// "park"
		type +
		'&key=' +
		googleApiKey;

	//  console.log("API.js " + mapsURL);
	return axios.get(mapsURL);
};
// =======
//  default {
// // 	getGoogleMap,
// 	signup,
// 	login,
// 	getTeam,
// 	postTeam,
// // >>>>>>> main

// return axios.post('/api/google/search', { location, radius, type });

// =====================================================
//   Check with the group about deleting

export default {
	getGoogleMap,
	signup,
	login,
	getTeam,
	postTeam,
	getUser,
	logout,
};
