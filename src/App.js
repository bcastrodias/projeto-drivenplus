import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subscription from "./components/Subscription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
