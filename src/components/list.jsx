import React from 'react';
import '../index.css';
import Item from './list_item';
function List (prop)
{
    return (
        <div style={{width:'max-content',padding:'0 3rem',background:'#dfe6f1',height:'82vh',display:'inline-block'}}>
            <div className="list_heading">{prop.list_heading}</div>
            {prop.list.map((val,idx)=>{
                return <Item src={val.src} text={val.text} course={val.course} key={idx}/>
            })}
        </div>
    )
}

export default List;