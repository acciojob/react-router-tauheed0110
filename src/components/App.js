
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <nav>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Welcome to my website!</h1>}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

function About(){
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React Router program.</p>
    </div>
  )
}