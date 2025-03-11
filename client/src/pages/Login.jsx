import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          LingoBeats Login
        </h2>
        <form action="/login" method="POST" className="space-y-4">
          <div>
            <label className="block text-gray-800">Username</label>
            <input
              type="text"
              name="username"
              className=" bg-gray-100 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Password</label>
            <input
              type="password"
              name="password"
              className="bg-gray-100 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup
          </Link>
          <span className="mx-2">|</span>
          <Link to="/dashboard" className="text-blue-500 hover:underline">
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
