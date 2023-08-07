import React from 'react'
import '../components/TopNav.css'
import { Link } from 'react-router-dom';

// TopNavigation.tsx


const TopNavigation: React.FC = () => {
  return (
    <nav className="top-navigation">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        
      </ul>
    </nav>
  );
}

export default TopNavigation;
