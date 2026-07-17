import React, { useState } from 'react';
import { Menu as MenuIcon, X, Utensils, ExternalLink } from 'lucide-react';

export default function Navbar({ currentRoute, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5DE]/80 bg-[#fcf9f1]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 md:h-32 items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => setRoute('home')} 
            className="flex items-center group cursor-pointer focus:outline-none"
          >
            <img 
              src="/Logo.webp" 
              alt="Namaste Hinton Logo" 
              className="h-24 md:h-28 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setRoute(link.id)}
                  className={`relative py-2 font-display text-2xl md:text-3xl tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'text-[#50251f]' 
                      : 'text-[#2D2D2D]/75 hover:text-[#2D2D2D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#50251f] transition-all duration-200" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#50251f] px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#3a1b16] shadow-sm focus:outline-none"
            >
              Order Online
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-[#2D2D2D] hover:bg-[#2D2D2D]/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-24 z-40 h-[calc(100vh-6rem)] w-full bg-[#fcf9f1] px-6 py-8 md:hidden transition-all duration-200 border-t border-[#E5E5DE]/80 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setRoute(link.id);
                  setIsOpen(false);
                }}
                className={`text-left font-display text-3xl tracking-wide py-2 ${
                  currentRoute === link.id 
                    ? 'text-[#50251f] border-l-2 border-[#50251f] pl-3' 
                    : 'text-[#2D2D2D]/85 hover:text-[#2D2D2D] pl-3'
                }`}
              >
                {link.name}
              </button>
            ))}
            
            <hr className="border-[#E5E5DE] my-4" />

            <a
              href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#50251f] py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#3a1b16]"
            >
              Order Online
              <ExternalLink className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
