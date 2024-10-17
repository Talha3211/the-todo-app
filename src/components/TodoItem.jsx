import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../features/todo/todoSlice";
import { auth } from "../firebaseConfig";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleCompleted = () => {
    dispatch(toggleTodo(todo));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  console.log(auth.currentUser);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 shadow-xl rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Task Title */}
        <span
          className={`text-lg font-semibold flex-grow mb-4 md:mb-0 ${
            todo.completed ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {todo.title}
        </span>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleToggleCompleted}
            className={`px-4 py-2 rounded-full text-white font-medium transition-transform transform-gpu duration-300 hover:scale-105 shadow-md ${
              todo.completed
                ? "bg-yellow-400 hover:bg-yellow-500"
                : "bg-green-500 hover:bg-green-600"
            } md:px-6 md:py-3 md:text-base`}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium shadow-md transition-transform transform-gpu duration-300 hover:scale-105 md:px-6 md:py-3 md:text-base"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
