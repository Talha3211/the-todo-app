import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { fetchTodos } from "../features/todo/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, fetchTodoLoading, error } = useSelector(
    (state) => state.todos
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [completedFilter, setCompletedFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const formatTodoDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return null;

    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("en-GB"); // Format as dd/mm/yyyy
  };

  const isDateInRange = (date, startDate, endDate) => {
    if (!startDate && !endDate) return true;
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    if (startDate) return date >= startDate;
    if (endDate) return date <= endDate;
    return true;
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearchQuery = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const todoDate = formatTodoDate(todo.created_at);
    const matchesDateRange = isDateInRange(todoDate, startDate, endDate);

    const matchesCompleted =
      completedFilter === "all"
        ? true
        : completedFilter === "true"
        ? todo.completed === true
        : todo.completed === false;

    return matchesSearchQuery && matchesDateRange && matchesCompleted;
  });

  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const parts = dateString.split("/");
    return `${parts[2]}-${parts[1]}-${parts[0]}`; // Convert to yyyy-mm-dd for input
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const parts = dateString.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`; // Convert to dd/mm/yyyy for display
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        Todo List
      </h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-3 mb-4 border-none bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-purple-400 transition-shadow duration-300"
      />

      {/* Date range filter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <input
            type="date"
            value={formatDateForInput(startDate)} // Use the function to set the value for input
            onChange={(e) => setStartDate(formatDateForDisplay(e.target.value))} // Format for storage
            className="w-full px-8 py-3 border-none bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-purple-400 transition-shadow duration-300"
          />
          <span className="absolute top-3 left-3 text-gray-500">📅</span>
        </div>
        <div className="relative">
          <input
            type="date"
            value={formatDateForInput(endDate)} // Use the function to set the value for input
            onChange={(e) => setEndDate(formatDateForDisplay(e.target.value))} // Format for storage
            className="w-full px-8 py-3 border-none bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-purple-400 transition-shadow duration-300"
          />
          <span className="absolute top-3 left-3 text-gray-500">📅</span>
        </div>
      </div>

      {/* Completed status filter */}
      <select
        value={completedFilter}
        onChange={(e) => setCompletedFilter(e.target.value)}
        className="w-full px-4 py-3 mb-4 border-none bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full shadow focus:outline-none focus:ring-4 focus:ring-purple-400 transition-shadow duration-300"
      >
        <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>

      {fetchTodoLoading && <p>Loading todos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="divide-y divide-gray-200">
        {currentTodos.length > 0 ? (
          currentTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p className="text-center text-gray-600">
            No todos match your search or filters.
          </p>
        )}
      </ul>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-5 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none transition-transform duration-200 transform hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="text-gray-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-5 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none transition-transform duration-200 transform hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoList;
