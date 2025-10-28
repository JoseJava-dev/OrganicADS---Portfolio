import { useState } from 'react'
import CardCurva from './components/CardCurva';
import { Route, Routes } from 'react-router-dom';
import WorkDid from './pages/WorkDid';


function App() {

/*
link netlify: organicads-portafolio.netlify.app

*/
  return (
    <>      
      <Routes>
        <Route path="/" element={<CardCurva />} />
        <Route path='/workDid' element={<WorkDid/> } />
      </Routes>
    </>
  )
}

export default App