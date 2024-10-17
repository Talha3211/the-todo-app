import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure toast styles are included

const AddToDo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { addTodoLoading, error } = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (title === "") {
      return toast.warning("Please provide a todo title", {
        autoClose: 3000,
      });
    }

    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle(""); // Clear input field after adding
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New Todo
      </h2>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo"
          className="w-full sm:flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={handleAddTodo}
          className="w-full sm:w-auto bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          disabled={addTodoLoading}
        >
          {addTodoLoading ? "Adding..." : "Add Todo"}
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      <ToastContainer />
    </div>
  );
};

export default AddToDo;
