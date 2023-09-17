import { useContext } from "react";
import StudentAppContext from "./context/StudentAppContext";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function StudentList() {
  const { studentData, checkStatus } = useContext(StudentAppContext);
  const studentArray = Object.values(studentData);

  if (checkStatus) {
    return <Spinner />;
  }

  return (
    <div>
      {studentArray.map((student) => {
        return (
          <Link
            to={`/profile/${student.id}`}
            className="p-3 student-card bg-cyan text-decoration-none text-dark"
            key={student.id}
          >
            <img
              src=""
              className="rounded-circle bg-danger"
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
