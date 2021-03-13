import React, { useState } from "react";

const SignUp = ({ setIsSignedIn }) => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignUpData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <div className=" mx-2 w-50">
        <h1 className="text-info">Sign Up</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Full Name
            </label>
            <input
              name="fullName"
              type="name"
              className="form-control"
              id="name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={signUpData.fullName}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={signUpData.email}
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
              value={signUpData.password}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          <button type="submit" className="btn btn-success btn-block">
            Submit
          </button>
          <p onClick={() => setIsSignedIn(true)} className="text-muted">
            Already Have An Account Sign In
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
