import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen w-full  py-10 px-4">
      {/* Heading */}
      <h1 className="text-3xl mb-12 font-bold text-center text-blue-700 drop-shadow-sm">
        📝 Todo Manager
      </h1>
      <Todo />
    </div>
  );
};

export default App;
