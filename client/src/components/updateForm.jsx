import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateForm = ({ id, reFetch, closeModal }) => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/users/${id}`);
        setTask(res.data.todo.task);
        setDeadline(res.data.todo.deadline);
        setStatus(res.data.todo.status);
      } catch (error) {
        console.log(`Fetch Error: ${error}`);
      }
    };
    fetchTodo();
  }, [id]);

  const updateTodo = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:4000/users/${id}`, {
        task,
        deadline,
        status,
      });
      alert(res.data.Message);
      reFetch();
      closeModal();
    } catch (error) {
      console.log(`Update Error: ${error}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Update Todo</h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={updateTodo} className="space-y-4">
            <div>
              <label
                htmlFor="update-task"
                className="block text-gray-700 font-medium mb-1"
              >
                Task
              </label>
              <input
                type="text"
                id="update-task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="update-deadline"
                className="block text-gray-700 font-medium mb-1"
              >
                Deadline
              </label>
              <input
                type="date"
                id="update-deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="update-status"
                className="block text-gray-700 font-medium mb-1"
              >
                Status
              </label>
              <select
                id="update-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Update Todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateForm;
