import React from 'react';
import './home.css'
import Course from './course.jsx';

function Module(prop) {
  return (
    <div className="module">
        
        <Course src={prop.src} style={prop.style} text={prop.text}/>
    <div>
        <div className="data">
            <span>2</span>
            Weeks
        </div>
        <div className="data">
            <span>6</span>
            Assignments
        </div>
        <div className="data">
            <span>9</span>
            MCQ Quiz
        </div>

    </div>
    </div>
  );
}

export default Module;
