import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResortDetails from "./pages/ResortDetails";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} admin={admin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resort-details" element={<ResortDetails />} />
        <Route path="/booking/:id" element={<Booking user={user} />} />
        <Route path="/dashboard" element={<PrivateRoute user={user}><Dashboard user={user} /></PrivateRoute>} />
        <Route path="/admin-login" element={<AdminLogin setAdmin={setAdmin} />} />
        <Route path="/admin" element={<PrivateRoute user={admin}><AdminDashboard admin={admin} /></PrivateRoute>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
