import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../firebaseConfig";

const TodoNavbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleHomeClick = () => {
    if (!user) {
      toast.warning("Please sign in to access the home page", {
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/auth");
      }, 3000);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* App Title */}
            <div className="flex-shrink-0">
              <button
                onClick={handleHomeClick}
                className="text-3xl font-extrabold tracking-tight text-white hover:text-purple-300 transition-colors duration-200"
              >
                Todo App
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button
                onClick={handleHomeClick}
                className="text-lg font-medium bg-transparent px-4 py-2 rounded-full hover:bg-purple-500 hover:bg-opacity-30 transition-colors duration-300"
              >
                Home
              </button>
              {!user ? (
                <Link
                  to="/auth"
                  className="text-lg font-medium bg-transparent px-4 py-2 rounded-full hover:bg-purple-500 hover:bg-opacity-30 transition-colors duration-300"
                >
                  Auth
                </Link>
              ) : (
                <button
                  onClick={() => {
                    auth.signOut();
                    navigate("/auth");
                  }}
                  className="text-lg font-medium bg-transparent px-4 py-2 rounded-full hover:bg-purple-500 hover:bg-opacity-30 transition-colors duration-300"
                >
                  Sign Out
                </button>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button className="text-white focus:outline-none">
                {!user ? (
                  <Link
                    to="/auth"
                    className="text-lg font-medium bg-transparent px-4 py-2 rounded-full hover:bg-purple-500 hover:bg-opacity-30 transition-colors duration-300"
                  >
                    Auth
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      auth.signOut();
                      navigate("/auth");
                    }}
                    className="text-lg font-medium bg-transparent px-4 py-2 rounded-full hover:bg-purple-500 hover:bg-opacity-30 transition-colors duration-300"
                  >
                    Sign Out
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TodoNavbar;
