import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="App">
      <nav className="navbar">
        <span className={`navtabcontainer ${activeTab === "home" ? "active-tab" : ""}`}>
          <i className="las la-home"></i>
          <Link
            className={`${activeTab === "home" ? "active-tab" : ""}`}
            to="/"
            onClick={() => setActiveTab("home")}
          >
            Home
          </Link>
        </span>
        <span className={`navtabcontainer ${activeTab === "contact" ? "active-tab" : ""}`}>
          <i className="las la-address-card"></i>
          <Link
            className={`${activeTab === "contact" ? "active-tab" : ""}`}
            to="/Contact"
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </Link>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
