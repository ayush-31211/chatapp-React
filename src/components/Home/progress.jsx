import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function Progress(prop)
{
    return (
        <div>
            <span style={{color:'blue',margin:'0 2rem', width:`${6}rem`,display:'inline-block'}}>{prop.text}</span>
            <div style={{display:'inline-block', margin:'0 auto'}}>
                <span style={{color:'blue',fontSize:'.7rem'}}>{prop.valText}</span>
                <ProgressBar variant="info" now={prop.val} style={{width:`${15}rem`,height:'10px',borderRadius:`${1}rem`,background:"aqua"}} />
            </div>
        </div>
        );
}
export default Progress;