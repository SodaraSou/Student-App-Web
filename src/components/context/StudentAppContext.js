import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ref, onValue, set, get } from "firebase/database";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db, auth } from "../../firebase.config";

const StudentAppContext = createContext();

export const StudentAppProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  const [studentProfile, setStudentProfile] = useState({});
  const [checkStatus, setCheckStatus] = useState(true);
  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = () => {
    try {
      const dataRef = ref(db, "data");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setStudentData(data);
        }
        setCheckStatus(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createStudentAccount = async (studentDetial) => {
    setCheckStatus(true);
    const { email, password, firstName, lastName, department, Class } =
      studentDetial;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        { disableAutoSignIn: true }
      );
      const dataRef = ref(db, `data/${userCredential.user.uid}/`);
      set(dataRef, {
        id: userCredential.user.uid,
        firstName,
        lastName,
        department,
        Class,
        email,
        password,
      });
      setCheckStatus(false);
      console.log("Account created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    try {
      signOut(auth);
      Navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudentProfile = async (studentId) => {
    try {
      const dataRef = ref(db, `data/${studentId}/`);
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        setStudentProfile(snapshot.val());
      }
      setCheckStatus(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const removeStudentAccount = () => {};
  // const updateStudentAccount = () => {};

  return (
    <StudentAppContext.Provider
      value={{
        studentData,
        logOut,
        createStudentAccount,
        checkStatus,
        fetchStudentProfile,
        studentProfile,
      }}
    >
      {children}
    </StudentAppContext.Provider>
  );
};

export default StudentAppContext;
