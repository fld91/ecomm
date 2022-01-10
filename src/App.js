import React from 'react'

import { Routes, Route } from 'react-router-dom';

import NewUser from './Components/NewUser';
import OldUser from './Components/OldUser';
function App() {
  

  return (
    <div>
      <Routes>
      <Route exact path="/" element={<NewUser/>} />
      <Route path="/olduser" element={<OldUser/>} />
    </Routes>
    </div>
  )
}

export default App
