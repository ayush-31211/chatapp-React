import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Join from "./components/join/join.jsx";
import Chat from "./components/chat/chat.jsx";
import Test from "./components/test/test.jsx";



function App() {
  return (
    <>
      <Router>
        <Route path="/join" exact component={Join}/>
        <Route path="/" exact component={Test}/>
      </Router>

    </>
  );
}

export default App;
