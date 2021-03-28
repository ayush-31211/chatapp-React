import React, { useState } from 'react';
import { Navbar, Nav, ProgressBar } from 'react-bootstrap';
import bell from '../asset/Notification.svg'
import avatar from '../asset/avatar.svg'
import './head.css'



function Head(props)
{
    
    let dropdown=()=>{console.log("Clicked")
setFlag(!flag)};
    let [flag,setFlag]=useState(false)
    let val=38;
    return (
        <div>
        <div className="head">
            <Navbar variant="dark">
                <Navbar.Brand href="#home"><span id="brand">Edyoda</span></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div id="avatar" className="justify-content-end">
                    <img src={bell} id="bell" alt="Notification"/>
                        <span>Hi Jane Doe!</span>
                        <img src={avatar} id="avatar_icon" alt="John"/>
                </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div className="head" style={{background:'#15294b',overflow:"hidden"}}>
            <Navbar variant="dark">
                <Navbar.Brand href="#home" onClick={dropdown}><span>TEST-010120 {"<>"}</span></Navbar.Brand>
                <Nav href="#features"><span style={{color:"white", fontSize:`${1.5}rem`, fontWeight:`bold`, margin:` ${0} ${2}vw`}}>Full Stack Developer Program</span></Nav>
                <Navbar.Collapse className="justify-content-end">
                    <div style={{height:'9vh'}}>
                        <div style={{textAlign:'end',display:(!flag)?"block":"none",height:'9vh'}}>
                            <span style={{color:'white',fontSize:`${1.5}rem`}}>{val}%</span>
                            <ProgressBar variant="info" now={val} style={{width:`${20}vw`, position:'relative',top:`${2.5}vh`}} />
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div id="test" className="head" style={{display:(flag)?"block":"none"}}>
            <span style={{display:'block', fontSize:'1rem',textTransform:'capitalize'}}>Select Program</span >
            <div>
                <span>TEST-010120</span>
                <span>TEXT-020220</span>
                <span>TEXT-030320</span>
            </div>
        </div>
        </div>
    );
}

export default Head;