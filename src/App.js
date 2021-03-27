import React from 'react';
import './App.css';
import NavBar from './components/nav.jsx';
import Head from './components/head.jsx'
import Home from './components/Home/home.jsx';



function App() {
  return (
    <div className="App">
      <Head/>
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
