// import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import StudentList from "../components/StudentList";
// import StudentAppContext from "../components/context/StudentAppContext";

function Home() {
  // const { currentAccount } = useContext(StudentAppContext);

  return (
    <main>
      <Sidebar />
      <div className="container">
        <h1>Home Admin!</h1>
        <StudentList />
      </div>
    </main>
  );
}

export default Home;
