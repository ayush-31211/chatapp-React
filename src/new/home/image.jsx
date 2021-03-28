import React from 'react';
 import avatar from '../../asset/avatar.svg';

function Image(prop)
{
    let style={margin:'1rem', color:'blue'};
    return (
        <div className="ongoing_img" style={prop.div_style}>
            <img src={prop.src} alt={prop.text} style={{width:'5rem'}}/>
            <div style={{display:'inline-block',margin:'0 1rem'}}>
                <span style={{fontSize:'x-large',...prop.text_style}}>{prop.text}</span>
                <div>
                    <img src={avatar} alt="JS"/>
                    <span style={style}>John</span>
                </div>
            </div>
        </div>
    )
}

export default Image;