// Import Modal
import User from "../Models/auth.js";

export const Sign_IN = async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please Enter Email And Password",
    });
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      res.status(400).json({ success: false, error: "Invalid  Credentials" });
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.status(400).json({ success: false, error: "Invalid  Password" });
    }
    res.status(201).json({ success: true });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, error: `Login Error ${error.message}` });
  }
};
// Sign Up
export const Sign_UP = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username);
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  res.send("Sign UP Controller");
};
