import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');


    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white p-3 rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
