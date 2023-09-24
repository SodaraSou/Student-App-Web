import { createContext, useReducer } from "react";
import { Navigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { db, auth } from "../../firebase.config";
import StudentAppReducer from "./StudentAppReducer";

const StudentAppContext = createContext();

export const StudentAppProvider = ({ children }) => {
  const initialState = {
    students: [],
    student: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(StudentAppReducer, initialState);

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
        id: userCredential.user.uid,
        firstName,
        lastName,
        department,
        Class,
        email,
        password,
      });
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

  // const removeStudentAccount = () => {};
  // const updateStudentAccount = () => {};

  return (
    <StudentAppContext.Provider
      value={{
        ...state,
        dispatch,
        logOut,
        createStudentAccount,
      }}
    >
      {children}
    </StudentAppContext.Provider>
  );
};

export default StudentAppContext;
