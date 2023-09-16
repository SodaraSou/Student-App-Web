import { useContext } from "react";
import StudentAppContext from "./context/StudentAppContext";

function StudentList() {
  const { studentData } = useContext(StudentAppContext);
  const studentArray = Object.values(studentData);

  return (
    <div className="">
      {studentArray.map((student) => {
        return (
          <div className="p-3 student-card bg-cyan" key={student.email}>
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
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;
