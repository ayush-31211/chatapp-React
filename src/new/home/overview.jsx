import React from 'react';
import Box from './box';
import './home.css';
function Overview(prop)
{
    return (
        <div style={{margin:'1rem'}}>
            <span style={{fontSize:'x-large',fontWeight:'500'}}>Progess Overview</span>
            <Box val={94} parameter="Overall Grade" color='green'/>
            <Box val={32} parameter="Attendence" color='red'/>
            <span className="blueTextOverview" >View Module Details</span>

        </div>
    )
}
export default Overview;