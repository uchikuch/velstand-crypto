import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Velstand from "src/components/Velstand";
import Auth from "src/components/Authentication/Auth";
import Login from "src/components/Authentication/Login/index";

function App() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route exact path="/" element={<Velstand />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Auth>
    </Router>
  );
}

export default App;
