/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

// API Key that is loaded in .env file
const googleApiKey = process.env.REACT_APP_googleApiKey;
// User routes
const signup = (data) => axios.post('/api/user/signup', data);
const login = (data) => axios.post('/api/user/login', data);

// TEAM API's -CP
// ///////////////////////////////////////////////////////////////////////////////
const getTeam = (teamData) => axios.get('/api/user/team', teamData);
const postTeam = (teamData) => axios.post('/api/user/team', teamData);
const deleteTeam = (teamData) =>
	axios.delete('/api/user/team', { data: { _id: teamData } });
const updateMembers = (teamData) => axios.put('api/user/team', teamData);
// ///////////////////////////////////////////////////////////////////////////////

const getUser = () => axios.get('/api/user/current_user');
const logout = () => axios.get('/api/user/logout');

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

export default {
	getGoogleMap,
	signup,
	login,
	getTeam,
	postTeam,
	updateMembers,
	deleteTeam,
	getUser,
	logout,
};
