import React from 'react';
import { Button } from 'react-bootstrap';

function Today(prop)
{
    let style={
        color:'black',
        fontWeight:'500',
        display:'block'
    }
    return (
        <div id="today">
            <span style={{...style,fontSize:'1.5rem'}}>Today's Plan</span>
            <span style={{...style,fontSize:'.8rem'}}>7 Feburary 2021</span>
            <span style={{...style,fontSize:'1.5rem', color:'blue',margin:'1rem 0',fontWeight:'400'}}>JavaScript</span>
            <span style={{...style,fontSize:'1rem', color:'black',margin:'1rem 0',fontWeight:'400',display:'inline'}}>Quiz/Assignment</span>
            <span style={{fontSize:'.8rem', color:'blue',fontStyle:'italic'}}> opens at 7 PM</span>
            <Button variant='info'  style={{display:'block',borderRadius:'2rem',background:'blue',marginTop:'10vh',padding:'.5rem 1.5rem'}}>JOIN LIVE SESSION</Button>
            <span style={{...style,fontSize:'.8rem',textAlign:'center'}}>SESSION IN PROGRESS</span>
            
        </div>
    )
}

export default Today;