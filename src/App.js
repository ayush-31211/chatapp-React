import React from 'react';
import './App.css';
import Home from './new/home/home';
// import Home from './new/home/home';
// import Module from './new/home/module';
// import Instructor from './new/instructor/instructor';
import Metastrip from './new/metastrip/metastrip';
import Nav from './new/navbar/navbar.jsx';
import SideBar from './new/sidebar/sidebar';
// import { Switch, Route, Router } from 'react-router-dom';
// import Home from './components/Home/activeCourse.jsx';




function App() {
  return (
    <div className="App">
      <Nav/>
      <Metastrip/>
      <SideBar/>
      <div id="containers">
        <Home/>
      </div>
    </div>
  );
}

export default App;
