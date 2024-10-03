import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtyFMU3Ql-yZgq2ESi1bCceYnDHSVCD-Q",
  authDomain: "cloth-9f8aa.firebaseapp.com",
  projectId: "cloth-9f8aa",
  storageBucket: "cloth-9f8aa.appspot.com",
  messagingSenderId: "888086070530",
  appId: "1:888086070530:web:faacbb75af29706e1a2e1b",
  measurementId: "G-Q1WKMYCZKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Monitor Firebase authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is authenticated, redirect to dashboard
       }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In successful!", user);
      
    } catch (error) {
      setError("Google Sign-In failed. Please try again.");
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Login
        </h2>
        {error && (
          <p className="text-center text-red-500 mb-4">{error}</p>
        )}
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:bg-gray-700 dark:border-gray-600 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-700 dark:text-gray-200"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary hover:text-primary/90 transition duration-200"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-full transition duration-200 hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-600 text-white py-2 rounded-full transition duration-200 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
          >
            Sign in with Google
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-primary hover:underline transition duration-200"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
