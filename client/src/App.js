import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Users from './components/Users'
import UserCreate from './components/UserCreate'
import UserUpdate from './components/UserUpdate'

export default function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/users' element={<Users/>} />
        <Route exact path='/create' element={<UserCreate/>} />
        <Route exact path='/update/:id' element={<UserUpdate/>} />        
      </Routes>
    </Router>
    </div>
  );
}