import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import CreateAccount from "./pages/CreateAccount";
import { StudentAppProvider } from "./components/context/StudentAppContext";
function App() {
  return (
    <StudentAppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:studentId" element={<Profile />} />
            <Route path="/createaccount" element={<CreateAccount />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </StudentAppProvider>
  );
}

export default App;
