import { useState } from "react";
import { signup, login } from "../utils/API";

export default function Login() {
  const [form, setForm] = useState("Signup");

  const handleSignup = () => {
    //do signup
  };
  const handleLogin = () => {
    //do login
  };
  return (
    <form className="container mt-5">
      <h1>{form}</h1>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" id="exampleInputEmail1" />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <label onClick={() => setForm(form === "Signup" ? "Login" : "Signup")}>
        Or {form === "Signup" ? "Log In" : "Sign Up"}
      </label>
    </form>
  );
}
