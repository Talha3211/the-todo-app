import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, clearUser, login } from '../features/users/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error, successMessage, status } = useSelector((state) => state.users); // Access the status, error, and success from Redux
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');


  useEffect(() => {
    // Clear messages on component mount/unmount
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch]);

  useEffect(() => {
    // Reset the success message when form is submitted or state changes
    if (status === 'succeeded') {
      setSuccess(successMessage);
    } else if (status === 'failed') {
      setSuccess('');
    }
  }, [status, successMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(''); // Reset success message before dispatching the login action
    dispatch(login({ email, password }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
        
        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 rounded mb-4">{success}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'} // Disable the button when loading
            className={`w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors ${
              status === 'loading' && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
