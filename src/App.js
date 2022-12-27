import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscription from "./components/Subscription";
import { AuthProvider } from "./contexts/auth";
import Plano from "./components/Plano";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/subscriptions/:id" element={<Plano />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
