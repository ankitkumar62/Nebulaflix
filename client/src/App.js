import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screen/Home'
import About from './screen/About';
import Episodes from './screen/Episodes';
import Add from './screen/Add'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about/:movieId" Component={About} />
          <Route path="/Episodes/:movieId" Component={Episodes} />
          <Route path='/Add' element={<Add />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
