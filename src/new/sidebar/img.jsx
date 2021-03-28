import React from 'react';

function Img(prop)
{
    console.log(prop.style);
    return (
        <div className='image' style={prop.style} onClick={prop.onClick}>
            <img src={prop.src} style={{display:'block',margin:'0 auto'}} alt={prop.text}/>
            <span style={{color:(prop.style.background==="#E0E6F2")?"#15294B":"#E0E6F2"}}>{prop.text}</span>
        </div>
    )
}

export default Img;