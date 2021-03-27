import React from 'react';

export default function Img(prop){
    return (
        <div style={{width:'min-content'}}>
            <img src={prop.src} style={prop.style} alt={prop.alt} />
            <span>{prop.alt}</span>
        </div>
    );
}