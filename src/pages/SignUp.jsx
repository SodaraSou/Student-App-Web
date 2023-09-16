import { useState, useContext } from "react";
import StudentAppContext from "../components/context/StudentAppContext";

function SignUp() {
  const { createStudentAccount } = useContext(StudentAppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createStudentAccount(formData);
  };

  return (
    <>
      <div className="container">
        <h1 className="mb-3">Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
