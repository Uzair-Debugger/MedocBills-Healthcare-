import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Container } from './components/layout';
import Hero from './pages/Hero';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contactus from './pages/Contactus';
import AboutUs from './pages/Aboutus';
import CareerPage from './pages/Career';
import ClientsPage from './pages/Clients';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Container size="full" className="px-0">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/clients" element={<ClientsPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
