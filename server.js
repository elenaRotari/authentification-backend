import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import albumRoute from "./routes/albumRoute.js";
import photoRouter from "./routes/photoRoute.js";

const PORT = process.env.PORT || 4000;
const URI = process.env.URI || "mongodb://localhost:27017/test";
// initialize express
const app = express();

// set middleware
app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());

// set routes
app.use("/users", userRouter);
app.use("/albums", albumRoute);
app.use("/photos", photoRouter);
// set mongoose
mongoose.connect(URI, () => {
  console.log("DB-Connected");
  (err) => {
    console.error(err);
  };
});

// set express on PORT
app.listen(PORT, () => {
  console.log("Server listen on PORT: " + PORT);
});
