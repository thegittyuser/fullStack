import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { sessionId, email } = useParams();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(
        `http://localhost:5000/profile/${sessionId}/${email}`
      );
      const data = await response.json();

      if (data.ok) {
        setUserEmail(data.email);
      }
    }

    fetchProfile();
  }, [sessionId, email]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow rounded text-center">
        <h1 className="text-2xl mb-4">Welcome User</h1>
        <p className="mb-6">Email: {userEmail}</p>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/login")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
