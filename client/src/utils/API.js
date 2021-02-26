/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

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

export const getGoogleMap = (data) => {
	return axios.post("/api/google/search", data);
};

const API = {
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

export default API;