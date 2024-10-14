import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const ProctectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  return user ? children : <Navigate to="/auth" />;
};

export default ProctectedRoute;
