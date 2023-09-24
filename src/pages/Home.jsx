import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentAppContext from "../components/context/StudentAppContext";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Hello Admin!</h1>
        <div className="d-flex justify-content-center justify-content-md-start">
          <StudentList />
        </div>
      </div>
    </>
  );
}

export default Home;
