import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Upload from "../Pages/Upload";
import Analyse from "../Pages/Analyse";
import Information from "../Pages/Information";
import "./Dashboard.css";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <Profile />;
      case "upload":
        return <Upload />;
      case "analyse":
        return <Analyse />;
      case "information":
        return <Information />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      {/* Top Bar */}
      <div className="topbar">
        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
        <h2>My Dashboard</h2>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        setActivePage={setActivePage}
      />

      {/* Page Content */}
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default Dashboard;
