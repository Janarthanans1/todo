import React, { useState } from "react";
import axios from "axios";
import { listTodo } from "../utils/listTodo";
const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users", {
        task,
        deadline,
      });
      alert(res.data.Message);
      setTask("");
      setDeadline("");
      listTodo();
    } catch (error) {
      console.log(`Post Error : ${error}`);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <form onSubmit={createTodo} className="space-y-4">
        <div>
          <label
            htmlFor="task"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Task :
          </label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Deadline :
          </label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
