import { get, ref } from "firebase/database";
import { db } from "../../firebase.config";

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
