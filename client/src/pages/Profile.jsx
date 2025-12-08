import React from "react";

function Profile() {
  // Example user data — replace with real user info from your backend/auth system
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        {/* Profile Image */}
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto border-4 border-indigo-500 object-cover"
        />

        {/* Username */}
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>

        {/* Email */}
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
}

export default Profile;
