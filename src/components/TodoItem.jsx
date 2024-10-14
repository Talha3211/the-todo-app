// src/components/TodoItem.js
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
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4">
      <span
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        } text-lg`}
      >
        {todo.title}
      </span>
      <button
        onClick={handleToggleCompleted}
        className={`px-4 py-2 mr-2 rounded-lg ${
          todo.completed
            ? "bg-yellow-400 hover:bg-yellow-500"
            : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
