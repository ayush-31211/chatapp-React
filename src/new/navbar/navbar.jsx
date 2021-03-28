import React from 'react';
import logo from '../../asset/logo.svg';
import notification from '../../asset/Notification.svg';
import avatar from '../../asset/avatar.svg';
import './navbar.css';
import { Navbar } from 'react-bootstrap';



function NavBar(prop)
{
    return (
        <div id='Nav'>
            <div style={{display:" block", height: "max-content", margin: ".5rem 0"}}>
                <Navbar variant="dark">
                    <div>
                        <img src={logo} alt="EDYODA"/>
                    </div>
                    <Navbar.Collapse className="justify-content-end">
                        <div id="avatar" className="justify-content-end">
                            <img src={notification} alt="Notification"/>
                            <span id='user_name'>Hi Jane Doe!</span>
                            <img src={avatar} alt="John"/>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}
export default NavBar;