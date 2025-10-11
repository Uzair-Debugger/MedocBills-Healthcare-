import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Hero />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
