import React from 'react'
import "./styles.css"
import Navbar from "./components/Navbar"
import { Router, Routes } from 'react-router-dom'
import Contact from './routes/Contact';
import About from './routes/About';
import Service from './routes/Service';
import Homes from './routes/Homes';


export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Homes />
        <Service />
        <About />
        <Contact />
    </div>
  )
}

