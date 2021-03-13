import React, { useState } from "react";
import SignIn from "../../Components/SignIn";
import SignUp from "../../Components/SignUp/index";
const Index = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <>
      {!isSignedIn ? (
        <SignUp setIsSignedIn={setIsSignedIn} />
      ) : (
        <SignIn setIsSignedIn={setIsSignedIn} />
      )}
    </>
  );
};

export default Index;
