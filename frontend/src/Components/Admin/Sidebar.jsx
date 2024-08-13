// src/Components/Sidebar/Sidebar.js
import React, { useContext,useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUsers, FaNewspaper, FaChartBar, FaCog, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { AuthContext } from '../Authentication/AuthContext';
import "../../Assest/css/Sidebar1.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { username } = useContext(AuthContext);

  const handleLogoClick = () => {
    setCollapsed(!collapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${darkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo" onClick={handleLogoClick}>
          {!collapsed && <h2>Dashboard</h2>}
        </div>
        <div className="sidebar-header-right">
          <button className="sidebar-toggle" onClick={handleLogoClick}>
            {collapsed ? '▶' : '◀'}
          </button>
        </div>
      </div>

      <div className="sidebar-profile">
        <FaUserCircle className="profile-icon" />
        {!collapsed && (
          <div className="profile-info">
            <span className="profile-name">{username ? username : 'Guest'}</span>
            <span className="profile-role">Admin</span>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard" activeClassName="active-link">
          <FaHome /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/job-posting" activeClassName="active-link">
          <FaClipboardList /> <span>Job Posting</span>
        </NavLink>
        <NavLink to="/review-applications" activeClassName="active-link">
          <FaChartBar /> <span>Review Applications</span>
        </NavLink>
        <NavLink to="/manage-clients" activeClassName="active-link">
          <FaUsers /> <span>Manage Clients</span>
        </NavLink>
        <NavLink to="/update-news" activeClassName="active-link">
          <FaNewspaper /> <span>Update News</span>
        </NavLink>
        <NavLink to="/feedback" activeClassName="active-link">
          <VscFeedback /> <span>Feedback</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="footer-item" activeClassName="active-link">
          <FaCog /> <span>{collapsed ? '' : 'Settings'}</span>
        </NavLink>
        <button className="footer-item" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />} <span>{collapsed ? '' : darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
