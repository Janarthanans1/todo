import TodoModel from "../models/Todo_Model.js";

export const createTodo = async (req, res) => {
  try {
    const { task, deadline } = req.body;
    if (!task || !deadline) {
      return res.json({ message: "All Fields Are Required" });
    }
    const newTodo = await TodoModel.create({ task, deadline });
    newTodo.save();
    res.status(201).json({ Message: "New Todo Created" });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(400).json({ Error: error });
  }
};

export const listTodo = async (req, res) => {
  try {
    const todolist = await TodoModel.find();
    res.json({ todolist });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(400).json({ Error: error });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;
  const updatedtodo = await TodoModel.findByIdAndUpdate(id, { task, status });
  res.status(200).json({ updatedtodo });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletetodo = await TodoModel.findByIdAndDelete(id);
  res.status(200).json({ deletetodo });
};
