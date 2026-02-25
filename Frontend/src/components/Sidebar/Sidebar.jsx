import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, setActivePage }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li onClick={() => setActivePage("home")}>🏠 Home</li>
        <li onClick={() => setActivePage("profile")}>👤 Profile</li>
        <li onClick={() => setActivePage("upload")}>⬆ Upload</li>
        <li onClick={() => setActivePage("analyse")}>📊 Analyse</li>
        <li onClick={() => setActivePage("information")}>ℹ Information</li>
        <li className="logout" onClick={logout}>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
