import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login.js'
import Register from './pages/register'
import Home from './pages/home/home.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element = {<Home endpoint="home"/>} />
          <Route path="/politics" element={<Home endpoint='politics' />} />
          <Route path="/login" element={<Login />} />
          <Route path = '/register' element = {<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
