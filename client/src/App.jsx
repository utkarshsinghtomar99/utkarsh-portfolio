import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import Login from "./pages/login";
import AdminStatus from "./pages/AdminStatus";
import AdminDashboard from "./pages/AdminDashboard";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminStatus />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
