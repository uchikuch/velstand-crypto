import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleDashboardLayout from "./layouts/SimpleDashboard";
import Velstand from "src/components/Velstand";
import Auth from "src/components/Authentication/Auth";
import Login from "src/components/Authentication/Login/index";
import Overview from "./components/Dashboard/Overview";
import Balance from "./components/Dashboard/Balance";
import Convert from "./components/Dashboard/Convert";
import Settings from "./components/Dashboard/Settings";
import Signup from "./components/Authentication/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Velstand />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <SimpleDashboardLayout>
              <Overview />
            </SimpleDashboardLayout>
          }
        />
        <Route
          path="/dashboard/balance"
          element={
            <SimpleDashboardLayout>
              <Balance />
            </SimpleDashboardLayout>
          }
        />
        <Route
          path="/dashboard/convert"
          element={
            <SimpleDashboardLayout>
              <Convert />
            </SimpleDashboardLayout>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <SimpleDashboardLayout>
              <Settings />
            </SimpleDashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
