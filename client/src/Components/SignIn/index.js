import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

const SignIn = ({ setIsSignedIn }) => {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  const handleSignIn = async () => {
    let email = loginData.email;
    let password = loginData.password;
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    console.log(email, password);
    try {
      const { data } = await axios.post(
        "http://localhost:9000/api/auth/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem("user", data.token);
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div className=" mx-2 w-50">
        <h1 className="text-info">Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={loginData.email}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={loginData.password}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success btn-block btn-lg w-100"
            onClick={handleSignIn}
          >
            Submit
          </button>
          <p className="my-2 text-center">OR</p>
          <GoogleLogin
            clientId="777354049827-ef5aa06atsbuoqt99k47o0803555no41.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="btn btn-block"
          />
          <p onClick={() => setIsSignedIn(false)} className="text-muted mt-2">
            Don't Have An Account Create One
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
