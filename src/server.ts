import { config } from "dotenv";
import connectDB from "./config/database";
import express from "express";
import passport from "passport";
import bodyParser from "body-parser";
import configurePassport from "./config/passport";

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import readingExamRoutes from "./routes/readingExamRoutes";
import listeningExamRoutes from "./routes/listeningExamRoutes";
import answerKeyRoutes from "./routes/answerKeyRoutes";

config();
const app = express();

// Middleware
app.use(express.json());

app.use(bodyParser.json());

// Initialize Passport
configurePassport(passport);
app.use(passport.initialize());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/readingExam", readingExamRoutes);
app.use("/api/listeningExam", listeningExamRoutes);
app.use("/api/answerKey", answerKeyRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
