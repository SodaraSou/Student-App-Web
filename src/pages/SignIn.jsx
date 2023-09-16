import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import test from "../components/assets/splash.png";
function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form-signin" onSubmit={onsubmit}>
        <img className="mb-4" src={test} alt="" width="120" height="100" />
        <h1 className="h3 mb-3 fw-normal">Please Login In</h1>

        <div className="form-floating w-100">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={onChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating w-100">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default SignIn;
