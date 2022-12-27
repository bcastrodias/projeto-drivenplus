import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscription from "./components/Subscription";
import { AuthProvider } from "./ contexts/auth";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
