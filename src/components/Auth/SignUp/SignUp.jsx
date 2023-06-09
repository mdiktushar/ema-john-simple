import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const singUpHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    setError("");
    if (!isEmail(email)) {
      setError("Email is not valid");
      return;
    }
    if (password !== confirm_password) {
      setError("Password did't match");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="form-container">
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={singUpHandler}>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="">Confirm-Password</label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              required
            />
          </div>

          <input className="btn-submit" type="submit" value="signUp" />
        </form>
        <p>
          <small>
            Already hav an account? <Link to="/login">Login</Link>
          </small>
        </p>
        <p className="text-error">{error}</p>
      </div>
    </div>
  );
};

export default SignUp;
