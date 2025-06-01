import React from "react";

const Updatebtn = () => {
  return (
    <div>
      <button
        className="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 transition duration-300 text-sm"
        onClick={() => alert("hello")}
      >
        Update
      </button>
    </div>
  );
};

export default Updatebtn;
