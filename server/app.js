import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import storyRoutes from "./routes/storyRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

// Body parsing middleware.
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use("/stories", storyRoutes);
app.use("/user", userRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (err) {
    console.log("Connection to MongoDB failed", err.message);
  }
};

connectDB();

mongoose.connection.on("open", () =>
  console.log("Connection to database is successfull")
);
mongoose.connection.on("error", (err) => console.log(err));
