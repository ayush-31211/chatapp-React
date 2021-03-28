import React from 'react';

function Item(prop)
{
    return (
        <div>
            <div>
                <img src={prop.src} alt={prop.text} style={{width:'2rem'}} />
                <span style={{color:'black',margin:'0 1rem',fontSize:'1.2rem', fontWeight:'500'}}>{prop.text}</span>
            </div>
            <div style={{float:'right'}}>
                {prop.course.map((val,idx)=>{
                    return <div className="course_taught" key={idx}>{val}</div>
                })}
            </div>
        </div>
    )
}

export default Item;