import React from 'react';
import './nav.css';
import hdark from '../asset/home-dark.svg';
import idark from '../asset/instructors-dark.svg';
import mdark from '../asset/modules-dark.svg';
import hwhite from '../asset/home-white.svg';
import iwhite from '../asset/instructors-white.svg';
import mwhite from '../asset/modules-white.svg';
import Img from './img.jsx';


let home_dark,module_dark,instructor_dark,home_white,module_white,instructor_white,style;
style={
    background:'none',
    width:"8rem",
    padding:"2rem 3rem 0 3rem"
}

home_dark={
    path:hdark,
    style:style
}

module_dark={
    path:mdark,
    style:style
}

instructor_dark={
    path:idark,
    style:style
}

home_white={
    path:hwhite,
    style:style
}

module_white={
    path:mwhite,
    style:style
}

instructor_white={
    path:iwhite,
    style:style
}

function NavBar(props)
{
    console.log(home_dark);
    console.log(module_dark);
    console.log(instructor_dark);
    return (
        <div id="navbar">
            <Img src={home_white.path} style={home_white.style} alt="Home" />
            <Img src={module_white.path} style={module_white.style} alt="Module" />
            <Img src={instructor_white.path} style={instructor_white.style} alt="Instructor" />
        
        </div>
    );
}

export default NavBar;