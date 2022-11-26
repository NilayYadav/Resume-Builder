import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, SignUp, Details, Profile, Analyser } from "./pages";
import { PrivateRoute } from "./helpers/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/details"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/analyser"
          element={
            <PrivateRoute>
              <Analyser />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
