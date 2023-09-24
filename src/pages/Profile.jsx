import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import StudentAppContext from "../components/context/StudentAppContext";
import { getStudent } from "../components/context/StudentAppAction";
import Spinner from "../components/Spinner";

function Profile() {
  const { student, loading, dispatch } = useContext(StudentAppContext);
  const { studentId } = useParams();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const getStudentData = async () => {
      const studentData = await getStudent(studentId);
      dispatch({ type: "GET_STUDENT", payload: studentData });
    };
    getStudentData();
  }, [studentId]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <h1>Hello</h1>
      <h2>{student.firstName}</h2>
      <h2>{student.department}</h2>
    </>
  );
}

export default Profile;
