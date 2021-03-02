import ErrorResponse from "../Utils/errorResponse.js";
export default function (err, req, res, next) {
  // console.log("Err===>", err);
  let error = { ...err };
  error.message = err.message;
  //   Duplicate Handler
  if (err.code === 11000) {
    const message = "Duplicate Field Value Entered";
    error = new ErrorResponse(message, 400);
  }
  // Validation Error
  if (err.name === "ValidtaionErorr") {
    const message = Object.values(err.erros).map((x) => x.message);
    error = new ErrorResponse(message, 400);
  }
  // General Error

  res.status(err.status || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
}
