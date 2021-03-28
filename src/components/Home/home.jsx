import React from 'react';
import './home.css'
import ContinueLearning from './continueLearning.jsx';
import UpcomingModules from './upcomingModules.jsx';



function Home() {
  return (
    <div id="home" className="containers">
        <ContinueLearning/>
        <UpcomingModules/>
    </div>
  );
}

export default Home;
