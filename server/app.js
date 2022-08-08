import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import storyRoutes from "./routes/storyRoutes.js";

const app = express();

// Body parsing middleware.
app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());

app.use("/stories", storyRoutes);

const MONGO_URI =
  "mongodb+srv://mraltun:aa12345600@cluster0.btiys.mongodb.net/mernfsstoryuploaddb";
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
