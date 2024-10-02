import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigation } from 'react-router-dom'; // Import useNavigation

// import { addTodo } from '../redux/todoSlice';

const AddToDo = () => {
  const [title, setTitle] = useState('');
//   console.log(title)
  const dispatch = useDispatch();
  const { addTodoLoading,loading, error } = useSelector((state) => state.todos);

  
  const handleAddTodo = () => {
    if (title === '') {
        return toast.warning("Please provide a todo title", {
          autoClose: 3000,
        });
      }

    if (title.trim() === '') return;
    dispatch(addTodo(title));
    setTitle(''); // Clear input field after adding
  };

  return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Add New Todo</h2>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo"
          className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          disabled={addTodoLoading} // Disable button while loading
        >
          {addTodoLoading ? 'adding...' : 'Add Todo'}
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <ToastContainer />

    </div>
  );
};

export default AddToDo;
