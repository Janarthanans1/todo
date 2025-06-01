import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const TodoModel = mongoose.model("Todo List", TodoSchema);

export default TodoModel;
