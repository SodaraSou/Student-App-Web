import { useState, useContext } from "react";
import { createStudentAccount } from "../components/context/StudentAppAction";
import StudentAppContext from "../components/context/StudentAppContext";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

function CreateAccount() {
  const { loading, dispatch } = useContext(StudentAppContext);

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
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOADING" });
    const test = await createStudentAccount(inputData);
    if (test) {
      dispatch({ type: "CREATE_STUDENT" });
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <div className="p-4 md:py-10">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Create New Account
          </h1>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder=""
                  onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder=""
                  onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col w-full mb-2">
              <label htmlFor="firstName" className="mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder=""
                onChange={onChange}
                className="border p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-2">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="mb-2">
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  placeholder=""
                  onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="mb-2">
                  Class
                </label>
                <input
                  type="text"
                  id="Class"
                  placeholder=""
                  onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder=""
                  onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder=""
                  // onChange={onChange}
                  className="border p-2 rounded-xl"
                />
              </div>
            </div>
            <div className="flex md:justify-end">
              <button className="w-full md:w-auto text-white p-2 px-6 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
