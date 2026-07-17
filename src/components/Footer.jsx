import React from 'react';
import { Utensils, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer({ setRoute }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E5E5DE]/80 bg-[#fcf9f1]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <button 
              onClick={() => setRoute('home')} 
              className="flex items-center gap-2.5 self-start cursor-pointer focus:outline-none"
            >
              <img 
                src="/Logo.webp" 
                alt="Namaste Hinton Logo" 
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </button>
            <p className="text-base leading-relaxed text-[#2D2D2D]/75 max-w-sm mt-2">
              Authentic Indian street food, classic curries, freshly baked breads, custom burgers, and beverages in Hinton, Alberta.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2.5 rounded-full bg-[#50251f]/10 text-[#50251f] hover:bg-[#50251f] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a 
                href="https://www.facebook.com/people/Namaste-Hinton-Indian-kitchen/61590787347389/#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#50251f]/10 text-[#50251f] hover:bg-[#50251f] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm flex items-center justify-center" 
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-sans text-base font-bold tracking-widest text-[#2D2D2D] uppercase mb-5">
                Find Us
              </h3>
              <ul className="space-y-4 text-base text-[#2D2D2D]/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#50251f] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    340 Smith St #129,<br />
                    Hinton, AB T7V 2A1
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#50251f] shrink-0" />
                  <a href="tel:+17803159611" className="hover:text-[#50251f] transition-colors font-medium">
                    (780) 315-9611
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-sans text-base font-bold tracking-widest text-[#2D2D2D] uppercase mb-5">
                Hours of Operation
              </h3>
              <ul className="space-y-3 text-base text-[#2D2D2D]/80">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#50251f] shrink-0" />
                  <span>Sun – Thu: 11:00 AM – 11:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[#50251f] shrink-0" />
                  <span className="font-semibold text-[#2D2D2D]">Fri – Sat: 11:00 AM – 11:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Google Map Embedded Column */}
          <div className="flex flex-col h-full w-full">
            <h3 className="font-sans text-base font-bold tracking-widest text-[#2D2D2D] uppercase mb-5">
              Location
            </h3>
            <div className="w-full h-48 sm:h-full min-h-[220px] rounded-xl overflow-hidden border border-[#E5E5DE] shadow-sm">
              <iframe
                title="Namaste Hinton Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.751610427329!2d-117.5750807!3d53.407767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538355a298df24dd%3A0xc665792d475dc2a8!2s340%20Smith%20St%20%23129%2C%20Hinton%2C%20AB%20T7V%202A1!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E5DE]/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#2D2D2D]/60 font-medium">
            &copy; {currentYear} Namaste Hinton Restaurant. All rights reserved.
          </p>
          <div className="text-sm text-[#2D2D2D]/60 font-medium">
            Site designed by: <a href="https://www.appkart.com" target="_blank" rel="noopener noreferrer" className="text-[#50251f] hover:underline font-bold transition-all">Appkartz Inc</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
