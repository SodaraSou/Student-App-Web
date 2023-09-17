import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import StudentAppContext from "../components/context/StudentAppContext";
import Spinner from "../components/Spinner";

function Profile() {
  const { fetchStudentProfile, studentProfile, checkStatus } =
    useContext(StudentAppContext);
  const { studentId } = useParams();

  useEffect(() => {
    fetchStudentProfile(studentId);
  }, [studentId]);

  if (checkStatus) {
    return <Spinner />;
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>{studentProfile.firstName}</h2>
      <h2>{studentProfile.department}</h2>
    </>
  );
}

export default Profile;
