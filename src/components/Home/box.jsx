import React from 'react';
import {ProgressBar} from 'react-bootstrap';
function Box(prop)
{
    return (
        <div className="box">
            <div style={{marginBottom:'0.4rem'}}>
            <span style={{color:'black',fontSize:'2rem',float:'left'}}>{`${prop.val}%`}</span>
            <span style={{color:'black',fontSize:'1rem',float:'right',margin:'.5rem 0'}}>{prop.text}</span>

            </div>

            <ProgressBar variant={`${prop.bar_color}`} now={prop.val} style={{width:`${20}vw`,height:`${8}px`}} />

        </div>
    )
}

export default Box;