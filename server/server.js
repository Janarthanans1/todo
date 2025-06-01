import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/DataBase.js";
import TodoRoute from "./routes/Todo_Routes.js";

const app = express();
dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());
app.use("/", TodoRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server Running On : ${port}`);
});
