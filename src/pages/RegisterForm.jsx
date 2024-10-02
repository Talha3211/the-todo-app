import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage, clearUser, register } from '../features/users/userSlice';

const RegisterForm = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   setSuccess('');

  //   try {
  //     const response = await axios.post('https://reqres.in/api/register', { email, password });
  //     const token = response.data.token;  // Capture the token from the response
  //     localStorage.setItem('token', token);  

  //     setSuccess('Registration successful!');
  //   } catch (err) {
  //     setError(err.response.data.error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  
  const dispatch = useDispatch()
const [email,setEmail]= useState('')
const [password,setPassword] =useState('')
  const [success, setSuccess] = useState('');
const [loading, setLoading] = useState(false);

const { error, successMessage, status } = useSelector((state) => state.users); // Access the status, error, and success from Redux


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
  dispatch(register({ email, password }));
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
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
            disabled={loading}
            className={`w-full p-3 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors ${
              loading && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
