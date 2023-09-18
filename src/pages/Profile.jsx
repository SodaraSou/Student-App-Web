import { useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import StudentAppContext from "../components/context/StudentAppContext";
import Spinner from "../components/Spinner";

function Profile() {
  const { fetchStudentProfile, studentProfile, checkStatus } =
    useContext(StudentAppContext);
  const { studentId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchStudentProfile(studentId);
    window.scrollTo(0, 0);
  }, [studentId, location.pathname]);

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
