import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Topbar from "./components/topbar/Topbar";
// import PersonIcon from "@mui/icons-material/Person";

function App() {
  return (
    <div className="APP">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
