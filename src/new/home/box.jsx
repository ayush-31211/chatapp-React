import React from 'react';
import ProgressBar from '../progressbar'

function Box(prop)
{
    return (
        <div className='blueBox'>
            <div style={{display:'flex', alignItems:'center'}}>
                <div className='progressBox' style={{textAlign:'left',fontSize:'xx-large'}}>
                    {prop.val} %
                </div>
                <div className='progressBox' style={{textAlign:'right'}}>
                    {prop.parameter}
                </div>
            </div>
            <ProgressBar width={`${15}rem`} val={`${prop.val*15/100}rem`} style={{display:'inline-block'}}backgroundColor="#e5e5e5" barColor={prop.color} />
            </div>
    )
}

export default Box;