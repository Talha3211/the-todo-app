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
      <ToastContainer /> {/* Ensure the ToastContainer is placed here */}
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <button
                onClick={handleHomeClick} // Replace Link with button and handle manually
                className="text-2xl font-bold hover:text-indigo-300"
              >
                Todo App
              </button>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={handleHomeClick} // Handle home navigation manually
                className="text-lg font-medium hover:bg-indigo-500 px-3 py-2 rounded-md"
              >
                Home
              </button>
              {!user ? (
                <Link
                  to="/auth"
                  className="text-lg font-medium hover:bg-indigo-500 px-3 py-2 rounded-md"
                >
                  Auth
                </Link>
              ) : (
                <button
                  onClick={() => {
                    auth.signOut();
                    navigate("/auth");
                  }}
                  className="text-lg font-medium hover:bg-indigo-500 px-3 py-2 rounded-md"
                >
                  Sign Out
                </button>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <button className="text-white focus:outline-none">
                {!user ? (
                  <Link
                    to="/auth"
                    className="text-lg font-medium hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Auth
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      auth.signOut();
                      navigate("/auth");
                    }}
                    className="text-lg font-medium hover:bg-indigo-500 px-3 py-2 rounded-md"
                  >
                    Sign Out
                  </button>
                )}
                {/* <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg> */}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TodoNavbar;
