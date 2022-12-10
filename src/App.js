import React from 'react'
import "./styles.css"
import { Route, Router, Routes } from 'react-router-dom'
import Contact from './routes/Contact';
import About from './routes/About';
import Service from './routes/Service';
import Homes from './routes/Homes';
import SignUp from './routes/SignUp';


export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  )
}

