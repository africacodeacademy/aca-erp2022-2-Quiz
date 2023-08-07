import '../components/TextSection.css'
import { Route,Routes} from 'react-router-dom';
import BlackWidow from './BlackWidow';
import Thor from './Thor';

// TextSection.tsx
import React from 'react';
import BlackPanther from './BlackPanther';
import IronMan from './IronMan';
import WinterSoldier from './WinterSoldier';
import Dashboard from '../topnavigation/Dashboard';
import Profile from '../topnavigation/Profile';
import Settings from '../topnavigation/Settings';
import Quiz from '../pages/QuizPage';

const TextSection: React.FC = () => {
  return (
    <div className="text-section">
    
    
        
    <Routes>
        <Route path="/blackwidow" element={<BlackWidow />} />
        <Route path="/thor" element={<Thor />} />
        <Route path="/blackpanther" element={<BlackPanther />} />
        <Route path="/ironman" element={<IronMan/>} />
        <Route path="/wintersoldier" element={<WinterSoldier/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
     
    </div>
  );
}

export default TextSection;
