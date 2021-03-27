import React from 'react';
import './home.css'
import ReactJs from '../../asset/tech-reactjs.svg';
import Module from './module';


function Home() {
  return (
    <div id="upcoming"><div class="row">
        <Module src={ReactJs} style={{width:'4rem', float:'left', margin:'1rem'}} text="REACTJS"/>
        <Module src={ReactJs} style={{width:'4rem', float:'left', margin:'1rem'}} text="REACTJS"/>
        <Module src={ReactJs} style={{width:'4rem', float:'left', margin:'1rem'}} text="REACTJS"/>
        <Module src={ReactJs} style={{width:'4rem', float:'left', margin:'1rem'}} text="REACTJS"/>
        </div>
    </div>
    

  );
}

export default Home;
