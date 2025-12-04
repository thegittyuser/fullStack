import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  // const [form, setForm] = useState()

  return (
    <>
      <section className="w-full max-w-sm mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

        <form className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="px-4 py-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Login"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition"
            />
          </div>

          {/* New Register Button */}
          <div className="text-center">
            <button
              type="button"
              className="mt-3 w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition font-medium"
            >
              <Link to={"/register"}>New User? Register Now</Link>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
