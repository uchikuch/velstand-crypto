import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Velstand from "src/components/Velstand";
import Auth from "src/components/Authentication/Auth";

function App() {
  return (
    <Router>
      <Auth>
        <Routes>
          <Route exact path="/" element={<Velstand />} />
        </Routes>
      </Auth>
    </Router>
  );
}

export default App;
