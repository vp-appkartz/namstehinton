import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Highlights from './pages/Highlights';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  const [route, setRoute] = useState('home');

  // Scroll to top on route change for seamless page switching experience
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Route switcher
  const renderPage = () => {
    switch (route) {
      case 'home':
        return <Home setRoute={setRoute} />;
      case 'highlights':
        return <Highlights />;
      case 'menu':
        return <Menu />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setRoute={setRoute} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF6]">
      {/* Navbar Navigation */}
      <Navbar currentRoute={route} setRoute={setRoute} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer Details */}
      <Footer setRoute={setRoute} />
    </div>
  );
}

export default App;
