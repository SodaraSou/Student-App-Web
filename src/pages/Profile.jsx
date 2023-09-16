import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

function Profile() {
  const navigate = useNavigate();
  const onLogout = () => {
    try {
      signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
}

export default Profile;
