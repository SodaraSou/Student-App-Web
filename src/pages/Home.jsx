import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";

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
