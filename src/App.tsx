import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNavigation from './components/SideNavigation';
import TopNavigation from './components/TopNavigation';
import TextSection from './components/TextSection';

const App: React.FC = () => {
  return (
    <Router>
    <div className="app">
      <div className="nsection-container">
        
        <SideNavigation />
        <div className="main-content">
          <TopNavigation />
          <TextSection />
        </div>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
