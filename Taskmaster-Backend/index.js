import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors());

// Configuration (using either dotenv or hardcoded config)
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/taskmaster";
const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";

// Database Connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("TaskMaster server is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
