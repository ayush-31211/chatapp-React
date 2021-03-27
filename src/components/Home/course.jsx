import React from 'react';
import './home.css'
import avatar from '../../asset/avatar.svg';

function Course(prop) {
  return (
    <div className="course">
        <img src={prop.src} style={prop.style} alt={prop.text} />
        <div style={{display:"inline-block",float:'right',marginTop:'.5vh'}}>
            <div className='text'>{prop.text}</div>
            <img src={avatar} id="avatar_icon" alt="John"/>
            <span style={{color:'black',margin:'0 1vw'}}>John</span>
        </div>
    </div>
  );
}

export default Course;
