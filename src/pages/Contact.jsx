import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 400);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      
      {/* Title Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#50251f]">Visit Us</span>
        <h1 className="mt-4 text-5xl tracking-tight text-[#2D2D2D] sm:text-6xl lg:text-7xl font-display font-normal">
          Hours & Location
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#2D2D2D]/75">
          Find us in the heart of Hinton, Alberta. Have any questions, feedback, or inquiries? Reach out using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Info Column (Left) */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          
          {/* Address Card */}
          <div className="rounded-2xl border border-[#E5E5DE] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex gap-4">
              <div className="rounded-lg bg-[#50251f]/10 p-3 text-[#50251f] shrink-0">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D] mb-2">Our Location</h3>
                <p className="text-sm leading-relaxed text-[#2D2D2D]/75">
                  340 Smith St #129,<br />
                  Hinton, AB T7V 2A1
                </p>
                <a 
                  href="https://maps.google.com/?q=340+Smith+St+129,+Hinton,+AB+T7V+2A1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#50251f] hover:text-[#2D2D2D] transition-colors"
                >
                  Get Directions &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Card */}
          <div className="rounded-2xl border border-[#E5E5DE] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex gap-4">
              <div className="rounded-lg bg-[#50251f]/10 p-3 text-[#50251f] shrink-0">
                <Clock className="h-5.5 w-5.5" />
              </div>
              <div className="w-full">
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D] mb-3">Hours of Operation</h3>
                <div className="space-y-2 text-sm text-[#2D2D2D]/75">
                  <div className="flex justify-between py-1 border-b border-[#E5E5DE]/40">
                    <span>Sunday – Thursday</span>
                    <span className="font-medium text-[#2D2D2D]">11:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E5E5DE]/40">
                    <span>Friday – Saturday</span>
                    <span className="font-medium text-[#50251f]">11:00 AM – 11:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="rounded-2xl border border-[#E5E5DE] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex gap-4">
              <div className="rounded-lg bg-[#50251f]/10 p-3 text-[#50251f] shrink-0">
                <Phone className="h-5.5 w-5.5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D] mb-2">Direct Contact</h3>
                <p className="text-sm leading-relaxed text-[#2D2D2D]/75 mb-3">
                  Reach our front desk directly for takeout order updates or inquiries.
                </p>
                <div className="flex flex-col gap-1.5 text-sm font-semibold text-[#2D2D2D]">
                  <a href="tel:+17803159611" className="hover:text-[#50251f] transition-colors flex items-center gap-1.5">
                    Phone: (780) 315-9611
                  </a>
                  <a href="mailto:hello@namastehinton.com" className="hover:text-[#50251f] transition-colors flex items-center gap-1.5 mt-1">
                    Email: hello@namastehinton.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Form Column (Right) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-[#E5E5DE] bg-white p-8 shadow-sm text-left">
            <h2 className="font-sans text-2xl font-bold text-[#2D2D2D] mb-2">Inquiry Form</h2>
            <p className="text-sm text-[#2D2D2D]/70 mb-8">
              Send us a message and our team will get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-[#fcf9f1] rounded-xl border border-[#E5E5DE] p-6 animate-fadeIn">
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-sans text-lg font-bold text-[#2D2D2D] mb-2">Message Sent Successfully</h3>
                <p className="text-sm text-[#2D2D2D]/70 max-w-sm">
                  Thank you for reaching out. We have received your inquiry and will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-bold text-[#50251f] hover:text-[#2D2D2D] transition-colors focus:outline-none"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#E5E5DE] bg-[#fcf9f1] px-4 py-3 text-sm text-[#2D2D2D] focus:border-[#50251f] focus:outline-none focus:ring-1 focus:ring-[#50251f] transition-colors"
                    placeholder="E.g., Jaspreet Singh"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#E5E5DE] bg-[#fcf9f1] px-4 py-3 text-sm text-[#2D2D2D] focus:border-[#50251f] focus:outline-none focus:ring-1 focus:ring-[#50251f] transition-colors"
                    placeholder="jaspreet@example.com"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#2D2D2D] uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-[#E5E5DE] bg-[#fcf9f1] px-4 py-3 text-sm text-[#2D2D2D] focus:border-[#50251f] focus:outline-none focus:ring-1 focus:ring-[#50251f] transition-colors resize-none"
                    placeholder="Tell us about your event, catering, or reservation inquiry..."
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#50251f] py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-[#3a1b16] transition-colors duration-200 cursor-pointer focus:outline-none"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>

              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
