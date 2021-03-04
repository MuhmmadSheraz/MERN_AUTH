// Import Modal
import User from "../Models/auth.js";
import ErrorResponse from "../Utils/errorResponse.js";

export const Sign_IN = async function (req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please Provide Email And Password", 400));
  }
  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 400));
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Password", 400));
    }
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
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
    sendToken(user, 201, res);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Sending Token Response

const sendToken = (user, statusCode, res) => {
  let token = user.getToken();
  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};
