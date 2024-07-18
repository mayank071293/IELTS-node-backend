import { config } from "dotenv";
import connectDB from "./config/database";
import express from "express";

config();
const app = express();

// Middleware
app.use(express.json());

// Routes
//app.use('/api/users', userRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
