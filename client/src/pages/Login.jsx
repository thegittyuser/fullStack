import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/dologin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.ok) {
      navigate(`/profile/${data.userEmail.sessionId}`);
    } else {
      console.log(data.message);
    }
  };

  return (
    <section className="w-full max-w-sm mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="submit"
          value="Login"
          className="w-full py-2 bg-blue-600 text-white rounded cursor-pointer"
        />

        <Link to="/register" className="block text-center text-blue-600">
          New User? Register
        </Link>
      </form>
    </section>
  );
}

export default Login;
