import express from "express";
import userRouter from "./src/routes/user.routes.js";
import connectDB from "./src/db/index.js";

const app = express();

app.use("/api/v1/user", userRouter);
connectDB().then(() => {
  app.listen(5000, () => {
    console.log("connected to db");
  });
});
