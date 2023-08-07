
import '../components/SideNav.css'
import { Link } from 'react-router-dom';


// SideNavigation.tsx
import React from 'react';

const SideNavigation: React.FC = () => {
  return (
    <div className="side-navigation">
      {/* Side Navigation Bar */}
      <ul>
        <li><Link to="/blackwidow">Black WIDOW</Link></li>
        <li><Link to="/thor">THOR</Link></li>
        <li><Link to="/blackpanther">BLACK PANTHER</Link></li>
        <li><Link to="/ironman">IRONMAN</Link></li>
        <li><Link to="/wintersoldier"> WINTER SOLDIER</Link></li>
      </ul>
    </div>
  );
}

export default SideNavigation;
