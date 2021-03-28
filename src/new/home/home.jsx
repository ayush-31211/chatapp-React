import React from 'react';
import './home.css';
import Ongoing from './ongoing.jsx';
import Overview from './overview';
import Today from './today.jsx';
import Module from './modules.jsx';

import ReactJs from '../../asset/tech-reactjs.svg';
import Django from '../../asset/tech-django.svg';
import Aws from '../../asset/tech-aws.svg';
import DSA from '../../asset/tech-data-analysis.svg';
import left from '../../asset/left.svg';
import right from '../../asset/right.svg';




function Home(prop)
{
    return (
        <>
            <span className="heading">Continue Learning</span>
            <span className="blueText">View Module Details</span>
            <div className="flexbox ">
                <div className="content" id='active_course'>
                    <Ongoing/>
                    <Today/>
                </div>
                <div className="content" id='overview'>
                    <Overview/>
                </div>
            </div>    
            <span className="heading" style={{marginTop:'5rem'}}>Upcoming Modules</span>
            <div className="flexbox " style={{margin:'0 1rem'}}>
                <Module path={ReactJs} course="ReactJs" />
                <Module path={Django} course="Django"/>
                <Module path={Aws} course="Intro to AWS" text_style={{fontSize:'1.4rem'}}/>
                <Module path={DSA} course="Data Analysis Fundamentals" div_style={{marginTop:'0',marginBottom:'0'}}/>
            </div>    
            <div className="flexbox" style={{height:"6rem"}}>
                <div style={{margin:'2rem auto'}}>
                    <img src={left} alt="prev" className='arrow'/>
                    <img src={right} alt="next" className='arrow'/>
                </div>
            </div>    

        </>
    )
}

export default Home;