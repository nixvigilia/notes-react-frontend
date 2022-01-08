import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { useAppState } from "./AppState";

const App = (props) => {
  let navigate = useNavigate();
  const { dispatch } = useAppState();
  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    console.log(auth);
    if (auth) {
      dispatch({ type: "auth", payload: auth });
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

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
