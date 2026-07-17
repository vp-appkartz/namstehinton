import React from 'react';
import { Utensils, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer({ setRoute }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E5E5DE]/80 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => setRoute('home')} 
              className="flex items-center gap-2.5 self-start cursor-pointer focus:outline-none"
            >
              <img 
                src="/Logo.webp" 
                alt="Namaste Hinton Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-2xl font-normal tracking-wide text-[#D97706] pt-1">
                Namaste Hinton
              </span>
            </button>
            <p className="text-sm leading-relaxed text-[#2D2D2D]/70 max-w-xs">
              Authentic Indian street food, classic curries, freshly baked breads, custom burgers, and beverages in Hinton, Alberta.
            </p>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#2D2D2D] uppercase mb-4">
              Hours of Operation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#2D2D2D]/75">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#D97706] shrink-0" />
                <span>Sun – Thu: 11:00 AM – 11:00 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#D97706] shrink-0" />
                <span className="font-medium text-[#2D2D2D]">Fri – Sat: 11:00 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#2D2D2D] uppercase mb-4">
              Find Us
            </h3>
            <ul className="space-y-3.5 text-sm text-[#2D2D2D]/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[#D97706] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  340 Smith St #129,<br />
                  Hinton, AB T7V 2A1
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#D97706] shrink-0" />
                <a href="tel:+17803159611" className="hover:text-[#D97706] transition-colors">
                  (780) 315-9611
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Join Column */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#2D2D2D] uppercase mb-4">
              Newsletter
            </h3>
            <p className="text-sm leading-relaxed text-[#2D2D2D]/70 mb-4">
              Subscribe to receive updates on seasonal specials, tasting menus, and culinary events.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-lg border border-[#E5E5DE] bg-[#FAFAF6] px-3.5 py-2 text-xs text-[#2D2D2D] placeholder-[#2D2D2D]/40 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706]"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-[#2D2D2D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#D97706] transition-colors focus:outline-none"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E5DE]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#2D2D2D]/55">
            &copy; {currentYear} Namaste Hinton Restaurant. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#2D2D2D]/55">
            <a href="#" className="hover:text-[#D97706] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D97706] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
