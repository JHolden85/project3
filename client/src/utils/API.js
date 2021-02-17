import axios from "axios";

export const signup = (data) => axios.post("/api/user/signup", data);
export const login = (data) => axios.post("/api/user/login", data);
// export const signup = (data) => axios.post("/api/user/signup")
