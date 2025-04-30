import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import MovingServices from './pages/MovingServices';
import Donate from './pages/Donate';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream">
        <div className="vintage-frame">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/boutique" element={<Boutique />} />
              <Route path="/moving-services" element={<MovingServices />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;