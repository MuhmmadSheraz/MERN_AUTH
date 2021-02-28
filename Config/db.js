import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://demouser:demouser1231456@cluster0.3juuo.mongodb.net/Mern_Authentication?re tryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongo DB CONFIGURED");
  } catch (err) {
    console.log("Mongo DB Cofig Failed");
  }
};
