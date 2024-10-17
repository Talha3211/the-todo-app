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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-br from-blue-50 via-white to-purple-100 shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Add New Todo
      </h2>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo"
          className="w-full sm:flex-grow p-4 bg-gradient-to-r from-purple-100 to-blue-100 border-none rounded-full shadow focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
        />

        <button
          onClick={handleAddTodo}
          className={`w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 transition-all ${
            addTodoLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
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
