import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages";
import Hotels from "./Pages/Hotels/Hotels";
import Profile from "./Pages/Profile/Profile";
import { SignUp, SignInPage } from "./Pages";
import UpdatePsw from "./Pages/UpdateProfile/UpdatePsw/UpdatePsw";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stays" element={<Hotels />} />
          <Route path="/Signin" element={<SignInPage type="login" />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateinfos" element={<UpdatePsw />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
