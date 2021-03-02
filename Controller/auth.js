// Import Modal
import User from "../Models/auth.js";
import ErrorResponse from "../Utils/errorResponse.js";

export const Sign_IN = async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide Email And Password"));
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials"));
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Password"));
    }
    res.status(201).json({ success: true });
  } catch (error) {
    next(err);
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
