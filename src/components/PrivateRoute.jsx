import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [checkStatus, setCheckStatus] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        // setCheckStatus(false);
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  // if (checkStatus) {
  //   return <Spinner />;
  // }

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
