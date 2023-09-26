import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import PlusSign from "../components/assets/svg/plus-solid.svg";

function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 p-10 xl:px-0">
        <StudentList />
        <Link
          to="/createaccount"
          className="h-full flex flex-col border items-center justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img src={PlusSign} alt="PlusSign" height={24} width={24} />
          <h1>Add new student</h1>
        </Link>
      </div>
    </>
  );
}

export default Home;
