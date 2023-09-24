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
    <div>
      <Link
        to="/createaccount"
        className="p-3 student-card bg-cyan text-decoration-none text-dark fw-semibold d-flex justify-content-center"
      >
        Add New Student
      </Link>
      {studentArray.map((student) => {
        return (
          <Link
            to={`/profile/${student.id}`}
            className="p-3 student-card bg-cyan text-decoration-none text-dark"
            key={student.id}
          >
            <img
              src={Logo}
              className="rounded-circle"
              height={75}
              width={75}
              alt="logo"
            />
            <div className="student-card-des">
              <h3 className="mb-0">{student.firstName}</h3>
              <p className="mb-0">Department: {student.department}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default StudentList;
