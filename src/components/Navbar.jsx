import React, { useState } from 'react';
import { Menu as MenuIcon, X, Utensils, ExternalLink } from 'lucide-react';

export default function Navbar({ currentRoute, setRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Highlights', id: 'highlights' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5DE]/80 bg-[#FAFAF6]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            onClick={() => setRoute('home')} 
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <img 
              src="/Logo.webp" 
              alt="Namaste Hinton Logo" 
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
            <span className="font-display text-3xl font-normal tracking-wide text-[#D97706] pt-1">
              Namaste Hinton
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setRoute(link.id)}
                  className={`relative py-2 text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive 
                      ? 'text-[#D97706]' 
                      : 'text-[#2D2D2D]/75 hover:text-[#2D2D2D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#D97706] transition-all duration-200" />
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
              className="inline-flex items-center gap-1.5 rounded-full bg-[#2D2D2D] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#D97706] focus:outline-none"
            >
              Order Online
              <ExternalLink className="h-3.5 w-3.5" />
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
        <div className="fixed inset-0 top-20 z-40 h-[calc(100vh-5rem)] w-full bg-[#FAFAF6] px-6 py-8 md:hidden transition-all duration-200 border-t border-[#E5E5DE]/80">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setRoute(link.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-medium tracking-wide py-2 ${
                  currentRoute === link.id 
                    ? 'text-[#D97706] border-l-2 border-[#D97706] pl-3' 
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
              className="flex items-center justify-center gap-2 rounded-xl bg-[#2D2D2D] py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:bg-[#D97706]"
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
