import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const App = (props) => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/:form" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
