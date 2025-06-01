import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  deadline: {
    type: String,
  },
});

const TodoModel = mongoose.model("Todo List", TodoSchema);

export default TodoModel;
