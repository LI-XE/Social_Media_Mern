import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Topbar from "./components/topbar/Topbar";
import { AuthContext } from "./context/AuthContext";
import react, { useContext } from "react";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="APP">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Register />} />
          <Route path="/profile/:username" exact element={<Profile />} />
          <Route path="/login" exact element={user ? <Home /> : <Login />} />
          <Route
            path="/register"
            exact
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/messenger"
            exact
            element={!user ? <Navigate to="/" /> : <Messenger />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
