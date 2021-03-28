import React from 'react';
import Box from './box.jsx';

function Overview(prop)
{
    return (
        <div style={{float:'right'}}>
            <div style={{textAlign:'end'}} className="blueText"><span>`</span></div>
            <div id="overview">
                <span style={{fontSize:'1.5rem',color:'black',fontWeight:'500', display:'block', marginLeft:'2rem'}}>Progress Overview</span>
                <Box val={94} bar_color='danger' text="Overall Grade"/>
                <Box val={32} bar_color="success" text="Attendence"/>
                <div style={{textAlign:'start',marginLeft:'2.5rem'}}><span className="blueText">view module details</span></div>
            </div>

        </div>
    )
}
export default Overview;