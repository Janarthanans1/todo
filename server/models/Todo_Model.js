import mongoose from "mongoose";
import connectDb from "../config/DataBase";

const Todoschema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
