import React, { useEffect, useState } from "react";
import axios from "axios";
import Deletebtn from "./deletebtn";
import Updatebtn from "./updatebtn";

const Todo = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todolist, setTodoList] = useState([]);

  useEffect(() => {
    listTodo();
  }, []);

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

  const listTodo = async () => {
    try {
      const res = await axios.get("http://localhost:4000/users");
      setTodoList(res.data.todolist);
    } catch (error) {
      console.log(`Get Error : ${error}`);
    }
  };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Responsive Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg lg:w-1/2">
            <form onSubmit={createTodo} className="space-y-6">
              <div>
                <label
                  htmlFor="task"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Task
                </label>
                <input
                  type="text"
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter task"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="deadline"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition duration-300"
              >
                ➕ Add Todo
              </button>
            </form>
          </div>

          {/* Table Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg lg:w-1/2">
            {/* Scrollable table container with fixed max height */}
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="px-4 py-2 text-left">Task</th>
                    <th className="px-4 py-2 text-left">Deadline</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todolist.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-4 text-gray-500"
                      >
                        No todos yet.
                      </td>
                    </tr>
                  ) : (
                    todolist.map((todo) => (
                      <tr
                        key={todo._id}
                        className="hover:bg-gray-100 transition"
                      >
                        <td className="px-4 py-2 border-t">{todo.task}</td>
                        <td className="px-4 py-2 border-t">{todo.deadline}</td>
                        <td className="px-4 py-2 border-t capitalize">
                          {todo.status}
                        </td>
                        <td className="px-4 py-2 border-t flex gap-2">
                          <Updatebtn />
                          <Deletebtn id={todo._id} reFetch={listTodo} />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
