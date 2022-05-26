import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import PasswordReset from "./Components/PasswordResetForm";

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<PasswordReset />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
