import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/assets/splash.png";
import StudentAppContext from "./context/StudentAppContext";

function Navbar() {
  const { logOut } = useContext(StudentAppContext);

  return (
    <>
      <div className="bg-cyan">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="flex items-center gap-4">
            <img src={Logo} alt="Logo" width={50} height={40} />
            <h1 className="text-2xl font-semibold">Student App Admin</h1>
          </Link>
          <button
            className="bg-red-500 py-2 px-4 rounded-full font-semibold"
            onClick={logOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
