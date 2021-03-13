import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const logout = () => {
    history.push("/")
    localStorage.setItem("user", "");
  };
  return (
    <div className="flex justify-content-center items-center text-center">
      <h3 className="text-success text-center font-weight-bold m-5">
        Welcome Home
      </h3>
      <button onClick={logout} className="btn btn-danger btn-lg">
        Log out
      </button>
    </div>
  );
};

export default Home;
