import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Contactus from './pages/Contactus'
import Footer from './components/Footer'
import AboutUs from './pages/Aboutus'
import CareerPage from './pages/Career'
import ClientsPage from './pages/Clients'
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
        <Route path='/about' element={<AboutUs />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/clients' element={<ClientsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
