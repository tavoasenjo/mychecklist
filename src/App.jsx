import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
// eslint-disable-next-line no-unused-vars
import app from "./firebase";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
