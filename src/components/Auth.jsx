import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  signOutUser,
  signInUser,
  signUpUser,
} from "../features/auth/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Auth = () => {
  // Get query parameters from the URL
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSignInState = searchParams.get("signin") === "true";
  const [isUser, setIsUser] = useState(initialSignInState); // Initialize based on query params

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSignUp = (values) => {
    dispatch(signUpUser(values));
  };

  const handleSignIn = (values) => {
    dispatch(signInUser(values)).then(() => {
      if (user) navigate("/");
    });
  };

  useEffect(() => {
    // If neither "signin" nor "signup" is present, default to "signin=true"
    if (!searchParams.get("signin") && !searchParams.get("signup")) {
      setSearchParams({ signin: "false" }); // Set the default query param
      setIsUser(true); // Set the state to "signin"
    } else {
      //   setIsUser(initialSignInState); // Set the state based on query param
    }
  }, [searchParams, initialSignInState, setSearchParams]);

  // Handle mode switch between Sign In and Sign Up
  const handleModeSwitch = () => {
    const newMode = !isUser;
    setIsUser(newMode);

    // Update URL based on the new mode
    if (newMode) {
      setSearchParams({ signin: "false" }); // Set query param to ?signin=true
    } else {
      setSearchParams({ signup: "false" }); // Set query param to ?signup=true
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        {isUser ? "Sign Up" : "Sign In"}
      </h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={isUser ? handleSignIn : handleSignUp}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-5px focus:ring-opacity-50"
            >
              {isUser ? "Sign In" : "Sign Up"}
            </button>
          </Form>
        )}
      </Formik>

      <button
        onClick={handleModeSwitch}
        className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mt-5"
      >
        {isUser ? "Switch to Sign Up" : "Switch to Sign In"}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Auth;
