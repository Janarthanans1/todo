import axios from "axios";
import React from "react";

const Deletebtn = ({ id, reFetch }) => {
  const deleteTodo = async () => {
    try {
      const res = await axios.delete(`http://localhost:4000/users/${id}`);
      alert(res.data.message);
      reFetch();
    } catch (error) {
      console.log(`Delete Error : ${error} `);
    }
  };
  return (
    <div>
      <button
        className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700 transition duration-300 text-sm"
        onClick={() => deleteTodo()}
      >
        Delete
      </button>
    </div>
  );
};

export default Deletebtn;
