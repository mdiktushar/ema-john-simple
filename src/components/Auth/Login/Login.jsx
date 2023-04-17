import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { logInUser } = useContext(AuthContext);

  const logInHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError("");
    logInUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={logInHandler}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />
        </div>

        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          Don't hav an account...! <Link to="/signUp">SingUp</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Login;
