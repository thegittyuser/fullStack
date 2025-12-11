import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { email } = useParams();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome User</h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Email: <span className="font-medium text-gray-800">{email}</span>
        </h2>

        <button
          className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
