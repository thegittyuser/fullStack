import { useParams } from "react-router-dom";

function Profile() {
  const { email } = useParams();
  return (
    <>
      <h1>Welcome User:</h1>
      <h2>Email: {email}</h2>
    </>
  );
}
export default Profile;
