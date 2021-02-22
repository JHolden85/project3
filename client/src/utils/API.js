
import axios from 'axios';


const signup = (data) => axios.post('/api/user/signup', data);
const login = (data) => axios.post('/api/user/login', data);

const getTeam = (teamData) => axios.get('/api/user', teamData);
const postTeam = (teamData) => axios.post('/api/user', teamData);

// <<<<<<< Nick
export const getGoogleMap = (location, radius, type) => {
  return axios.post("/api/google/search", {location, radius, type})
};
// =======
export default {
// 	getGoogleMap,
	signup,
	login,
	getTeam,
	postTeam,
// >>>>>>> main
};
