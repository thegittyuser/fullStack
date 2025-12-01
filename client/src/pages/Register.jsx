import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = fetch("http://localhost:5000/doregister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <>
      <section className="w-full max-w-sm mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register Form</h2>

        <form className="space-y-5" onSubmit={handleSubmit()}>
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="px-4 py-2 border rounded-md"
            />
          </div>

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

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Phone No
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              className="px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <input
              type="submit"
              value="Register"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-700 transition"
            />
          </div>

          {/* New Login Button */}
          <div className="text-center">
            <button
              type="button"
              className="mt-3 w-full py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition font-medium"
            >
              <Link to={"/login"}>Already Registered? Login Now</Link>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
