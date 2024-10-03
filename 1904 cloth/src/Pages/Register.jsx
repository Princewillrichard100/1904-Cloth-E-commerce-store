import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      // Mock registration using localStorage for now
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        setError("User with this email already exists.");
        return;
      }

      // Save the new user (simulating Fake Store API behavior)
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      console.log("Registered successfully!");

      // Redirect to login after successful registration
      navigate("/login");
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Register
        </h2>
        {error && (
          <p className="text-center text-red-500 mb-4">{error}</p>
        )}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              required
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-200"
              required
              placeholder="Enter your email"
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
              required
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-full transition duration-200 hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-primary hover:underline transition duration-200"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
