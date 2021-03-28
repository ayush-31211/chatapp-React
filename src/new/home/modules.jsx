import React from 'react';
import './home.css';
import Image from './image.jsx';

function Modules(prop)
{
    return (
        <>
        <div className='module'>
            <Image src={prop.path} text={prop.course} text_style={prop.text_style} div_style={prop.div_style}/>
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

        </>
    )
}
export default Modules;