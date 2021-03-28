import React from 'react';
import './home.css';
import Image from './image.jsx';
import JS from '../../asset/tech-javascript.svg';
import Progress from './progress';
// import Progress from '../../components/Home/progress.jsx';


function Ongoing(prop)
{
    return (
        <div id="ongoing">
            <Image src={JS} text='JavaScript'/>
            <Progress width={10} val={50} text='Progress' status='45%' />  
            <Progress width={10} val={15/35*100} text='Live Session' status='15/35' />  
            <Progress width={10} val={1/4*100} text='Assignments' status='1/4' />  
            <Progress width={10} val={5/6*100} text='MCQ Quiz' status='5/6' />  
        </div>
    )
}

export default Ongoing;