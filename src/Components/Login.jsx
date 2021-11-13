import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => (
    console.log(details)
  )
  const Logout = () => (
    console.log(Logout)
  )
  return (
    <div className="ui-main">
      {/* {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.email}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <Login />
      )} */}
      <form className="form-inner">
        <h2>Login</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" name="email" placeholder="Enter Email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" name="password" placeholder="Enter Password" id="password" />
        </div>
        <div className="signUp">
          <Link to="/shop">
            {" "}
            <a href="shop">
              <button className="SubmitLogin" type="submit">
                Login
              </button>
            </a>
          </Link>
          <div className="lowerLogin">
            <p>Don't have an account? </p>
            <h5 className="signup">Sign-up</h5>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
