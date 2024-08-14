import express from "express";
import userRouter from "./src/routes/user.routes.js";
import mainRouter from "./src/routes/index.routes.js";
import connectDB from "./src/db/index.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/main", mainRouter);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("connected to db");
  });
});
