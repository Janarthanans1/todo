import express from "express";
import {
  createTodo,
  deleteTodo,
  listTodo,
  updateTodo,
} from "../controllers/Todo.js";

const route = express.Router();

route.post("/users", createTodo);
route.get("/users", listTodo);
route.put("/users/:id", updateTodo);
route.delete("/users/:id", deleteTodo);

export default route;
