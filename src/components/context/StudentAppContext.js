import { createContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ref, onValue, set, get } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { db, auth } from "../../firebase.config";

const StudentAppContext = createContext();

export const StudentAppProvider = ({ children }) => {
  const [studentData, setStudentData] = useState([]);
  const [currentAccount, setCurrentAccount] = useState({
    firstName: "",
  });
  useEffect(() => {
    fetchStudentData();
    getCurrentUser();
  }, []);

  const fetchStudentData = () => {
    try {
      const dataRef = ref(db, "data");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setStudentData(data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createStudentAccount = async (studentDetial) => {
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
        firstName,
        lastName,
        department,
        Class,
        email,
        password,
      });
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

  const getCurrentUser = () => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const dataRef = ref(db, "data/" + uid + "/");
          const snapshot = await get(dataRef);
          const userData = snapshot.val();
          setCurrentAccount((prevState) => ({
            ...prevState,
            firstName: userData.firstName,
          }));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StudentAppContext.Provider
      value={{ studentData, logOut, createStudentAccount, currentAccount }}
    >
      {children}
    </StudentAppContext.Provider>
  );
};

export default StudentAppContext;
