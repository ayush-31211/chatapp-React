import { Button } from 'react-bootstrap'
import React from 'react' 

function Plan(prop)
{
    
    return (
        <div className='today' style={{marginTop:'1rem'}}>
            <span style={{display:'block',fontWeight:'500',fontSize:'large'}}>
                Today's Plan
            </span>
            <span style={{fontSize:'x-small'}}>7 Feburary 2021</span>
        </div>
    )
}

function JavaScript(prop)
{
    return (
        <div className='today' style={{marginTop:'2rem'}}>
            <span style={{fontWeight:'500',fontSize:'Large',color:'#0096FF '}}>
                JavaScript
            </span>
            <div style={{width:'max-content'}}>
                <span style={{fontSize:'x-small'}}>
                    Quiz/Assignment
                </span>
                <span style={{margin:'0 1rem',fontSize:'x-small',color:'#0096FF '}}>
                    opens at 7 PM
                </span>
            </div>
        </div>
    )
}

function JoinSession(prop)
{
    return (
        <div className='today' style={{textAlign:"center",width:'max-content',marginTop:'5rem'}}>
            <Button varient='info' style={{borderRadius:"2rem",padding:'.5rem 1.5rem',display:'block'}}>Join Live Session</Button>
            <span style={{fontSize:'small',textAlign:'center'}}>SESSION IN PROGRESS</span>
        </div>
    )
}





function Today(prop)
{
    return (
        <div id="today">
            
            <Plan/>
            <JavaScript/>
            <JoinSession/>
        </div>
    )
}

export default Today;
