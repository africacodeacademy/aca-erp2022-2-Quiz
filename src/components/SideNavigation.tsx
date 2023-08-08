
import '../components/SideNav.css'
import { Link } from 'react-router-dom';
import download from '../assets/download.png'
import hulk from '../assets/hulk.jpg'
import okoye from '../assets/okoye.jpg'
import clint from '../assets/clint.jpg'
import arrow from '../assets/arrow.jpg'


// SideNavigation.tsx
import React from 'react';

const SideNavigation: React.FC = () => {
  return (
    <div className="side-navigation">
      {/* Side Navigation Bar */}
      <div className="logo">
        <img src={download} alt="Logo" />
      </div>
      <div className='logos'>
      <ul>
        <li><Link to="/blackwidow">
       
        <img src={hulk} alt="Logo" /></Link>
        
        </li>
        <li><Link to="/thor"> <img src={hulk} alt="Logo" /></Link></li>
        <li><Link to="/blackpanther"> <img src={hulk} alt="Logo" /></Link></li>
        <li><Link to="/ironman"> <img src={hulk} alt="Logo" /></Link></li>
       
      </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
