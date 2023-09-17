import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [checkStatus, setCheckStatus] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckStatus(false);
    });
  }, []);
  return { loggedIn, checkStatus };
};
