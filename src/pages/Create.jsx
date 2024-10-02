import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


const Create = () => {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate(); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://reqres.in/api/users', { name, job });
      setSuccess('create user successful!');
    //   navigate('/')
    } catch (err) {
      setError('crate user failed. Please check your name and job.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">create user</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}
        {success && <div className="bg-green-100 text-green-700 p-2 rounded mb-4">{success}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-600">name</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              defaultValue={'morpheus'}

              required
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600">job</label>
            <input
              type="job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your job"
              defaultValue='leader'
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
            {loading ? 'creating...' : 'create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
