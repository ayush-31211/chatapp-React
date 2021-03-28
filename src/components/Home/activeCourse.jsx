import React from 'react';
import Course from './course';
import JavaScript from '../../asset/tech-javascript.svg';
import Progress from './progress.jsx';
import Today from './today.jsx';

function ActiveCourse(prop)
{
    return (
        <div style={{width:'max-content',display:'inline-block'}}>
            <div style={{textAlign:'end'}}><span className="blueText">view module details</span></div>
            <div id="activeCourse">
                <div style={{display:'inline-block'}}>
                <Course src={JavaScript} style={{margin:'0 1vw'}}text={"JAVASCRIPT"}/>
                <Progress val={45} valText="45%" text={"Progress"}/>
                <Progress val={15/35*100} valText="15/35" text={"Live Session"}/>
                <Progress val={1/4*100} valText="1/4" text={"Assignments"}/>
                <Progress val={5/6*100} valText="5/6" text={"MCQ Quiz"}/>

                </div>
            <Today/>
            </div>

        </div>
    )
}

export default ActiveCourse;