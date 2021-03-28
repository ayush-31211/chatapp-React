import React from 'react';
import List from '../list';
import './module.css';
import JS from '../../asset/tech-javascript.svg';

function Module(prop)
{
    let list=[
        {
            src:JS,
            text:"JavaScript",
            course:['JavaScript','react']
        },
        {
            src:JS,
            text:"JavaScript",
            course:['JavaScript','react']
        },
        {
            src:JS,
            text:"JavaScript",
            course:['JavaScript','react']
        },
        {
            src:JS,
            text:"JavaScript",
            course:['JavaScript','react']
        },
        {
            src:JS,
            text:"JavaScript",
            course:['JavaScript','react']
        },
    ];
    return (
        <div className="containers" id="module">
            <List list={list} list_heading="Modules"/>
        </div>
    )
}
export default Module;