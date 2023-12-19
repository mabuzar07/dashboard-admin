import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import Blank from "./pages/blank";
import User from "./pages/user";
import NotFound from "./pages/not-found";
import SignIn from "./pages/signin";

function App() {
  const location = useLocation();

  const isSignInPage = location.pathname === "/signin";
  return (
    <div className={`${!isSignInPage && "App"}`}>
      {!isSignInPage && <Navigation />}{" "}
      {/* Display Navigation except on sign-in page */}
      <div className="content-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/users" element={<User />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
