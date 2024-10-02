import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchTodos } from '../features/todo/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading,fetchTodoLoading, error } = useSelector((state) => state.todos);

  // State for search query, selected date, completed filter, and date range filter
  const [searchQuery, setSearchQuery] = useState('');
  const [completedFilter, setCompletedFilter] = useState('all'); // 'all', 'true', or 'false'
  const [startDate, setStartDate] = useState(''); // Start date for range filter
  const [endDate, setEndDate] = useState(''); // End date for range filter

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // Helper function to format Firestore Timestamp into YYYY-MM-DD
  const formatTodoDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return null;

    const date = new Date(timestamp.seconds * 1000);
    return date.toISOString().split('T')[0];
  };

  // Function to check if a date is within a range
  const isDateInRange = (date, startDate, endDate) => {
    if (!startDate && !endDate) return true; // If no range is selected, show all dates
    if (startDate && endDate) {
      return date >= startDate && date <= endDate;
    }
    if (startDate) return date >= startDate;
    if (endDate) return date <= endDate;
    return true;
  };

  // Filter todos based on the search query, date range, and completion status
  const filteredTodos = todos.filter((todo) => {
    const matchesSearchQuery = todo.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const todoDate = formatTodoDate(todo.created_at); // Assuming created_at is a Firestore Timestamp
    const matchesDateRange = isDateInRange(todoDate, startDate, endDate); // Check if todo is in the date range

    const matchesCompleted =
      completedFilter === 'all'
        ? true
        : completedFilter === 'true'
        ? todo.completed === true
        : todo.completed === false;

    return matchesSearchQuery && matchesDateRange && matchesCompleted;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Todo List</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Date range filter */}
      <div className="flex space-x-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Completed status filter */}
      <select
        value={completedFilter}
        onChange={(e) => setCompletedFilter(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>

      {fetchTodoLoading && <p>Loading todos...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="divide-y divide-gray-200">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <p>No todos match your search or filters.</p>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
