import React from 'react';
import ProgressBar from '../progressbar.jsx';

function Progress (prop)
{
    return (
        <div className="parameter">
            <div className="param">
                {prop.text}
            </div>
            <div>
                <span style={{padding:'0 1rem',color:'#0096FF',fontSize:'small'}}>{prop.status}</span>
                <ProgressBar width={`${prop.width}rem`} val={`${prop.val*prop.width/100}rem`} style={{display:'inline-block'}}backgroundColor="#ABE1FF" barColor="#0096FF" />
            </div>
        </div>
    )
}

export default Progress;