import { get, ref, remove, set } from "firebase/database";
import { db, auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { Navigate } from "react-router-dom";

export const getStudents = async () => {
  try {
    const dataRef = ref(db, "data");
    const snapshot = await get(dataRef);
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStudent = async (studentId) => {
  try {
    const dataRef = ref(db, `data/${studentId}`);
    const snapshot = await get(dataRef);
    const data = snapshot.val();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createStudentAccount = async (studentDetial) => {
  const { email, password, firstName, lastName, department, Class } =
    studentDetial;
  try {
    // Add account to Firebase Auth
    const studentCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      { disableAutoSignIn: true }
    );
    // Add details to Firebase DB
    const dataRef = ref(db, `data/${studentCredential.user.uid}/`);
    set(dataRef, {
      id: studentCredential.user.uid,
      firstName,
      lastName,
      department,
      Class,
      email,
      password,
    });
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAccount = (studentId) => {
  try {
    const dataRef = ref(db, `data/${studentId}/`);
    // Delete from Firebase Auth
    // deleteUser(studentId).then(() => {
    //   console.log("Delete Completed");
    // });
    // Delete from Firebase DB
    remove(dataRef);
    return true;
  } catch (error) {
    console.log(error);
  }
};
