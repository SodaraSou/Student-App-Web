import { useContext, useEffect } from "react";
import Logo from "../components/assets/splash.png";
import StudentAppContext from "./context/StudentAppContext";
import { getStudents } from "./context/StudentAppAction";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function StudentList() {
  const { students, loading, dispatch } = useContext(StudentAppContext);
  const studentArray = Object.values(students);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const getStudentsData = async () => {
      const studentsData = await getStudents();
      dispatch({ type: "GET_STUDENTS", payload: studentsData });
    };
    getStudentsData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {studentArray.map((student) => {
        return (
          <div
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={student.id}
          >
            <div className="flex flex-col items-center py-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={Logo}
                alt="test"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {student.firstName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {`Department: ${student.department}`}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link
                  to={`/profile/${student.id}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Profile
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default StudentList;
