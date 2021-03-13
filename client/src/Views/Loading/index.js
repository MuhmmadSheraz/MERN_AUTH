import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Loading = () => {
  const history = useHistory();
  useEffect(() => {
    const isUser = localStorage.getItem("user");
    if (isUser) {
      history.push("/home");
    }
    else{
        history.push("/");

    }
  },[]);
  return (
    <div>
      <h3 className="text-center">Loading</h3>
    </div>
  );
};

export default Loading;
