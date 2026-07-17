import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const [route, setRoute] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on route change for seamless page switching experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Listen for scroll events to toggle the Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route switcher
  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home setRoute={setRoute} />;
      case 'menu':
        return <Menu />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#fcf9f1] overflow-x-hidden relative">
      {/* Navbar Navigation */}
      <Navbar currentRoute={route} setRoute={setRoute} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Details */}
      <Footer setRoute={setRoute} />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3.5 rounded-full bg-[#50251f] text-white shadow-xl transition-all duration-300 hover:bg-[#3a1b16] hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#50251f]/30 ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default App;
