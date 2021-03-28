import React, { useState } from 'react';
import arrow from '../../asset/dropdown.svg';
import { Navbar } from 'react-bootstrap';

import './metastrip.css';
import ProgressBar from '../progressbar';

function Metastrip(prop)
{
    let width=10;
    let [flag,setFlag]=useState(true);
    let [one,setOne]=useState(true);
    let [two,setTwo]=useState(false);
    let [three,setThree]=useState(false);
    let One=()=>{
        setOne(true);
        setTwo(false);
        setThree(false);
    }
    
    let Two=()=>{
        setOne(false);
        setTwo(true);
        setThree(false);
    }
    
    let Three=()=>{
        setOne(false);
        setTwo(false);
        setThree(true);
    }
    
    let dropdown = ()=>{ setFlag(!flag)};

    return (
        <>
        <div id='metastrip'>
            <Navbar variant="dark" style={{height:'9vh'}}> 
                    <div id="dropdown" onClick={dropdown}>
                        <span className="FSR">text-010120</span>
                        <img src={arrow} alt="DropDown" style={{transform: (!flag)?"rotate(180deg)":"none"}}/>
                    </div>
                    <div id="Full_Stack">
                        Full Stack Developer Program
                    </div>
                <Navbar.Collapse className="justify-content-end">
                    <div id="progressbar" style={{textAlign:'end',display:(flag)?'block':'none'}}>
                        <span style={{color:'white',margin:'0rem 0',display:'inline-block',fontSize:'2rem'}}>{`${38}%`}</span>
                        <ProgressBar width={`${width}rem`} backgroundColor="#ABE1FF" barColor="#0096FF" val={`${38*width/100}rem`}/>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div id="menu" style={{display:(!flag)?'block':'none'}}>
            <span style={{color:'white',fontSize:'.8rem',padding:'0 4rem'}}>SELECT PROGRAM</span>
            <div id="menu_fsr">
                <span className={`FSR FSR_option ${(one)?"activeFSR":""}`} onClick={One}>text-010120</span>
                <span className={`FSR FSR_option ${(two)?"activeFSR":""}`} onClick={Two}>text-010120</span>
                <span className={`FSR FSR_option ${(three)?"activeFSR":""}`} onClick={Three}>text-010120</span>
            </div>
        </div>
        </>
    )
}

export default Metastrip;