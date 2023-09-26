import { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentAppContext from "../components/context/StudentAppContext";
import {
  getStudent,
  deleteAccount,
} from "../components/context/StudentAppAction";
import testAvatar from "../components/assets/splash.png";
import userMinus from "../components/assets/svg/user-minus-solid.svg";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

function Profile() {
  const { student, loading, dispatch } = useContext(StudentAppContext);
  const { studentId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const getStudentData = async () => {
      const studentData = await getStudent(studentId);
      dispatch({ type: "GET_STUDENT", payload: studentData });
    };
    getStudentData();
  }, [studentId]);

  const handleDelete = () => {
    dispatch({ type: "LOADING" });
    const deleteStudentAccount = deleteAccount(studentId);
    if (deleteStudentAccount) {
      dispatch({ type: "DELETE_STUDENT" });
      navigate("/");
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <div className="p-4 md:p-10">
          <div className="w-full md:w-1/2 shadow-xl rounded-xl overflow-hidden">
            <div className="bg-cyan p-4 flex justify-between items-start">
              <img
                src={testAvatar}
                alt="avatar"
                className="bg-white rounded-full border h-24 w-24"
              />
              <button onClick={handleDelete}>
                <img src={userMinus} height={20} width={20} alt="userMinuse" />
              </button>
            </div>
            <div className=" h-auto p-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">
                  {student.firstName} {student.lastName}
                </h1>
                <p>{`Department: ${student.department}, Class: ${student.Class}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
