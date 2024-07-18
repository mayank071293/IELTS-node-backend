import mongoose from "mongoose";
import { config } from "dotenv";
config();
const connectDB = async (): Promise<void> => {
  let uri: string;
  if (typeof process.env.DB_URI === "string") {
    uri = process.env.DB_URI;
    await mongoose
      .connect(uri, {})
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB", error);
      });
  }
};

export default connectDB;
