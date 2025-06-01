import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/DataBase.js";

const app = express();
dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server Running On : ${port}`);
});
