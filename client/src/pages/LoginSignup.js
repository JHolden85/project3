import React, { useState } from "react";
import API from "../utils/API";

export default function Login({ setUser }) {
  const [form, setForm] = useState("Signup");
  const [input, setInput] = useState({ username: "", password: "" });

  const handleSignup = () => {
    //do signup
    console.log("YOUR INPUT ", input);
    API.signup(input)
      .then((data) => {
        setUser(data.data);
        console.log(data.data)
        window.location.replace("/");
      })
      .catch((err) => console.log("signup went wrong, ", err));
  };
  const handleLogin = () => {
    API.login(input)
      .then((data) => {
        setUser(data.data);
        window.location.replace("/");
      })
      .catch((err) => console.log("login went wrong ", err));
  };

  const handleInputChange = ({ target: { value, name } }) => {
    setInput({ ...input, [name]: value });
  };

  return (
    <form className="container mt-5">
      <h1>{form}</h1>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          name="username"
          onChange={handleInputChange}
          className="form-control"
          id="exampleInputEmail1"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={handleInputChange}
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          if (form === "Signup") {
            handleSignup();
          } else {
            handleLogin();
          }
        }}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
      <button
        className="btn btn-primary ml-3"
        onClick={(e) => {
          e.preventDefault();
          setForm(form === "Signup" ? "Login" : "Signup");
        }}
      >
        Or {form === "Signup" ? "Log In" : "Sign Up"}
      </button>
    </form>
  );
}
