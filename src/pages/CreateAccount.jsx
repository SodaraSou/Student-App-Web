import { useState, useContext } from "react";
import StudentAppContext from "../components/context/StudentAppContext";
import Spinner from "../components/Spinner";

function CreateAccount() {
  const { createStudentAccount, checkStatus } = useContext(StudentAppContext);

  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    Class: "",
    password: "",
  });
  const onChange = (e) => {
    setInputData((previouseState) => ({
      ...previouseState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    createStudentAccount(inputData);
  };

  if (checkStatus) {
    return <Spinner />;
  }

  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label htmlFor="firstname" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First name"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last name"
            onChange={onChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            placeholder="Department"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="class" className="form-label">
            Class
          </label>
          <input
            type="text"
            className="form-control"
            id="Class"
            placeholder="Class"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Department" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="class" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
