import React from 'react';
import ActiveCourse from './activeCourse';
import './home.css'
import Overview from './overview';


function ContinueLearning() {
  return (
    <div id="continue">
        <span className='heading'>Continue Learning</span>
        <ActiveCourse/>
        <Overview/>
    </div>
  );
}

export default ContinueLearning;
