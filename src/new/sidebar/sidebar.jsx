import React, { useState } from 'react';
import Img from './img.jsx';
import home_white from '../../asset/home-white.svg';
import home_dark from '../../asset/home-dark.svg';
import module_white from '../../asset/modules-white.svg';
import module_dark from '../../asset/modules-dark.svg';
import instructor_white from '../../asset/instructors-white.svg';
import instructor_dark from '../../asset/instructors-dark.svg';
import './sidebar.css';
// import { Link, Router, Switch, Route } from 'react-router-dom';


function SideBar(prop)
{
    let [home,setHome]=useState(true),[module,setModule]=useState(false),[instructor,setInstructor]=useState(false);
    let Home,Module,Instructor;
    Home=()=>{
        setHome(true);
        setModule(false);
        setInstructor(false);
    }
    Module=()=>{
        setHome(false);
        setModule(true);
        setInstructor(false);
    }
    Instructor=()=>{
        setHome(false);
        setModule(false);
        setInstructor(true);
    }


    let white,dark;
    white={background: "#E0E6F2"}
    dark={background: "#15294B"}
    return (
        <div id='sidebar' style={{padding:'0'}}>
            {/* <Router> */}
                {/* <Link to="/"> */}
                    <Img src={(home)?home_dark:home_white} style={(home)?white:dark} onClick={Home} text="Home"/>
                {/* </Link> */}
                {/* <Link to="/module"> */}
                    <Img src={(module)?module_dark:module_white} style={(module)?white:dark} onClick={Module} text="Module"/>
                {/* </Link> */}
                {/* <Link to="/instructor"> */}
                    <Img src={(instructor)?instructor_dark:instructor_white} style={(instructor)?white:dark} onClick={Instructor} text="Instructor"/>
                {/* </Link> */}
                {/* <Switch>
                    <Route path="/module">
                    <Module/>
                    </Route>
                    <Route path="/instructor">
                    <Instructor/>
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch> */}
            {/* </Router> */}
        </div>
    )
}

export default SideBar;

/**
 * import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. *
            <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
 */