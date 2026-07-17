import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Clock, Compass, ChevronRight, MessageSquare, Star, ArrowUpRight, Waves, Wheat, Flame, Quote } from 'lucide-react';

export default function Home({ setRoute }) {
  // 1. Interactive Hero Dish Switcher State
  const [activeDishIdx, setActiveDishIdx] = useState(0);

  const heroDishes = [
    {
      name: 'Vada Pav',
      tagline: 'Mumbai Street Classic',
      price: '$14.99',
      description: 'Golden-fried spiced potato dumpling nestled inside a warm toasted bun, layered with dry garlic dust and mint-tamarind nectar.',
      tag: 'Best Seller',
      image: '/hero-dish.png',
      bgColor: 'bg-amber-50/50'
    },
    {
      name: 'Tandoori Paneer Burger',
      tagline: 'Flame-Grilled Fusion',
      price: '$19.99',
      description: 'Thick local paneer slab marinated in yogurt spices, clay-baked and stacked with fresh red onions, crisp greens, and tandoori-mint emulsion.',
      tag: 'Chef Choice',
      image: '/Tandoori Paneer Burger.png',
      placeholderText: 'Tandoori Paneer Burger Frame',
      accentStyle: 'from-amber-600/10 to-orange-600/10 text-[#50251f]',
      bgColor: 'bg-orange-50/30'
    },
    {
      name: 'Butter Chicken',
      tagline: 'Punjab Royal Heritage',
      price: '$19.99',
      description: 'Charcoal-grilled chicken tikka chunks simmered in a luscious tomato, butter, and cashew cream gravy, infused with hand-crushed fenugreek.',
      tag: 'Most Loved',
      image: '/butter chicken.png',
      placeholderText: 'Butter Chicken Curry Frame',
      accentStyle: 'from-rose-600/10 to-red-600/10 text-rose-700',
      bgColor: 'bg-rose-50/30'
    }
  ];

  // 2. Interactive Regional Journey State
  const [activeRegion, setActiveRegion] = useState('mumbai');

  const regions = {
    mumbai: {
      title: 'The Seaside Chaats of Mumbai',
      description: 'Street-side dining in Mumbai is dominated by the saline breeze of Juhu Beach and Chowpatty. The flavors are sharp, spicy, and heavily textured with crunch.',
      highlights: [
        { name: 'Vada Pav', price: '$14.99', desc: 'The iconic potato dumpling slider.' },
        { name: 'Bombay Beach Bhel Puri', price: '$10.50', desc: 'Tangy puffed rice with sweet-sour chutneys.' }
      ],
      cultureNote: 'Mumbai food represents the hurry of the city—fast, intense, and instantly satisfying.'
    },
    gujarat: {
      title: 'The Steamed Delicacies of Surat',
      description: 'Surat is famous for its slow-steamed chickpea flour savories, rich sweets, and thick milkshakes enjoyed late into the night at local bazaar hubs.',
      highlights: [
        { name: 'Surat Sev Khaman Crumble', price: '$11.00', desc: 'Crumbled chana dal cakes topped with fine sev.' },
        { name: 'Legendary Surat Cold Cocoa', price: '$9.00', desc: 'Creamy chilled dark chocolate shake.' }
      ],
      cultureNote: 'Surati flavors balance sourness and sweetness, emphasizing light, airy steaming techniques.'
    },
    punjab: {
      title: 'The Clay-Oven Curries of Punjab',
      description: 'Dhaba food along Punjab\'s highways is celebrated for rich dairy creams, fresh paneer slabs, slow-simmered lentils, and open clay-oven (tandoor) flatbreads.',
      highlights: [
        { name: 'Butter Chicken', price: '$19.99', desc: 'Tandoor chicken in rich tomato cashew butter gravy.' },
        { name: 'Clay-Baked Paneer Skewers', price: '$15.50', desc: 'Baked organic paneer with mint-coriander dip.' }
      ],
      cultureNote: 'Punjabi cuisine is defined by smoky clay-oven char and luxurious butter gravies.'
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pb-16 pt-6 md:pb-24 md:pt-10 lg:pb-32 lg:pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left animate-fade-in-up">
              
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#50251f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#50251f] animate-fade-in">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Elevated Indian Gastronomy</span>
              </div>
              
              <div className="font-display text-5xl sm:text-6xl text-[#50251f] mt-6 -mb-3 self-start select-none">
                Welcome to
              </div>
              
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2D2D2D] leading-[1.1] font-sans">
                Authentic Indian flavours, <span className="font-script text-[#50251f] font-normal lowercase tracking-wide block sm:inline">crafted</span> for the modern table.
              </h1>
              
              {/* Increased body text size for readability */}
              <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[#2D2D2D]/80">
                Experience the rich street chaats, aromatic biryanis, slow-simmered curries, and signature tandoori burgers at Namaste Hinton. Made fresh daily in Hinton, Alberta.
              </p>
              
              {/* Interactive Dish Selector Tabs inside Hero */}
              <div className="mt-10 p-2.5 rounded-2xl bg-white border border-[#E5E5DE]/80 shadow-sm flex flex-wrap gap-2 max-w-lg">
                {heroDishes.map((dish, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDishIdx(idx)}
                    className={`flex-1 min-w-[120px] rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer focus:outline-none ${
                      activeDishIdx === idx
                        ? 'bg-[#50251f] text-white shadow-sm'
                        : 'bg-transparent text-[#2D2D2D]/75 hover:bg-[#fcf9f1] hover:text-[#2D2D2D]'
                    }`}
                  >
                    {dish.name}
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setRoute('menu')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#50251f] px-7 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#3a1b16] transition-all duration-200 cursor-pointer focus:outline-none active:scale-98"
                >
                  View Full Menu
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => setRoute('contact')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E5DE] bg-white px-7 py-4 text-sm font-semibold text-[#2D2D2D] hover:bg-[#fcf9f1] hover:border-[#2D2D2D]/35 transition-all duration-200 cursor-pointer focus:outline-none"
                >
                  Find Hours & Directions
                </button>
              </div>
            </div>            {/* Right Interactive Animated Image Column */}
            <div className="lg:col-span-6 lg:pl-12 flex justify-center items-center relative min-h-[400px]">
              
              {/* Background ambient glow matching the active dish */}
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-20 scale-90 transition-colors duration-700 ${heroDishes[activeDishIdx].bgColor}`} />
              
              {/* Floating Image Container */}
              <div className="relative z-10 w-full max-w-[480px] animate-float">
                {heroDishes[activeDishIdx].image ? (
                  <img 
                    src={heroDishes[activeDishIdx].image} 
                    alt={heroDishes[activeDishIdx].name}
                    className="w-full h-auto object-contain drop-shadow-2xl animate-fade-in transition-opacity duration-500 rounded-[2rem]"
                    loading="eager"
                  />
                ) : (
                  <div className={`aspect-square w-full rounded-full border-2 border-[#E5E5DE]/40 bg-white/40 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center select-none shadow-xl transition-colors duration-700 ${heroDishes[activeDishIdx].bgColor}`}>
                    <div className="rounded-xl border border-[#E5E5DE]/50 bg-white/85 px-5 py-3 text-sm font-bold shadow-sm max-w-[260px] tracking-wider uppercase text-[#50251f]">
                      {heroDishes[activeDishIdx].placeholderText}
                    </div>
                    <span className="mt-4 text-xs text-[#2D2D2D]/60 uppercase tracking-widest font-semibold">
                      Authentic Indian Cuisine
                    </span>
                  </div>
                )}
                
                {/* Floating Decorative Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#50251f] to-[#3a1b16] text-white text-[11px] sm:text-xs uppercase font-extrabold tracking-wider px-5 py-2.5 rounded-full shadow-xl animate-fade-in-up flex items-center gap-1.5" style={{ animationDelay: '0.2s' }}>
                  {heroDishes[activeDishIdx].tag === 'Best Seller' && <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />}
                  {heroDishes[activeDishIdx].tag === 'Chef Choice' && <Sparkles className="h-3.5 w-3.5 text-yellow-400" />}
                  {heroDishes[activeDishIdx].tag === 'Most Loved' && <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />}
                  <span>{heroDishes[activeDishIdx].tag}</span>
                </div>
                
                <div className="absolute -bottom-6 -left-2 bg-[#50251f] text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  {heroDishes[activeDishIdx].price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Philosophy Section */}
      <section className="bg-gradient-to-b from-white to-[#fcf9f1] border-y border-[#E5E5DE]/80 py-20 md:py-28 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#50251f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#50251f]/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-sans">
              Our Cooking Philosophy
            </h2>
            {/* Increased text size */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#2D2D2D]/75">
              Indian dining is defined by the chemistry of fresh ingredients, rich textures, and spices. At Namaste Hinton, we cook with heritage recipes, utilizing in-house spices, freshly baked naans, and zero artificial flavors.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Feature 1 */}
              <div className="relative z-10 flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/80 bg-white hover:bg-gradient-to-br hover:from-[#50251f] hover:to-[#3a1b16] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(80,37,31,0.4)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="rounded-xl bg-gradient-to-br from-[#fcf9f1] to-[#E5E5DE] border border-[#E5E5DE]/50 group-hover:border-white/20 group-hover:from-white/20 group-hover:to-white/5 p-4 text-[#50251f] group-hover:text-white mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-xl font-extrabold text-[#2D2D2D] group-hover:text-white mb-3 transition-colors duration-300">Regional Roots</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/75 group-hover:text-white/80 transition-colors duration-300">
                  From Bombay beach snacks to rich Punjabi road-side gravies, our menus capture the diverse and authentic food maps of specific Indian cities.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative z-10 flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/80 bg-white hover:bg-gradient-to-br hover:from-[#50251f] hover:to-[#3a1b16] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(80,37,31,0.4)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="rounded-xl bg-gradient-to-br from-[#fcf9f1] to-[#E5E5DE] border border-[#E5E5DE]/50 group-hover:border-white/20 group-hover:from-white/20 group-hover:to-white/5 p-4 text-[#50251f] group-hover:text-white mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-xl font-extrabold text-[#2D2D2D] group-hover:text-white mb-3 transition-colors duration-300">Authentic & Pure</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/75 group-hover:text-white/80 transition-colors duration-300">
                  We use stone-ground spices and organic flour. Everything is 100% vegetarian-friendly, with substantial vegan adjustments available.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative z-10 flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/80 bg-white hover:bg-gradient-to-br hover:from-[#50251f] hover:to-[#3a1b16] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(80,37,31,0.4)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="rounded-xl bg-gradient-to-br from-[#fcf9f1] to-[#E5E5DE] border border-[#E5E5DE]/50 group-hover:border-white/20 group-hover:from-white/20 group-hover:to-white/5 p-4 text-[#50251f] group-hover:text-white mb-6 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-sans text-xl font-extrabold text-[#2D2D2D] group-hover:text-white mb-3 transition-colors duration-300">Fresh to Order</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/75 group-hover:text-white/80 transition-colors duration-300">
                  We prepare our burger patties daily, bake our naans in high-heat ovens instantly, and assemble all chaats right when you place your order.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Regional Journey Section */}
      <section className="py-20 md:py-28 bg-[#fcf9f1]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* Left Content Side: Interactive navigation */}
            <div className="w-full lg:w-5/12 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#50251f]">Interactive Taste Maps</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-sans leading-tight">
                Explore the culinary regions of India.
              </h2>
              
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#2D2D2D]/75">
                Our food tells the story of regional spice routes. Click on the regional buttons below to discover local delicacies and food history.
              </p>

              {/* Regional selector tabs */}
              <div className="mt-8 flex flex-col gap-4">
                {[
                  { id: 'mumbai', name: 'Mumbai Coastline', icon: <Waves className="h-5 w-5" /> },
                  { id: 'gujarat', name: 'Gujarat Heritage', icon: <Wheat className="h-5 w-5" /> },
                  { id: 'punjab', name: 'Punjab Heartland', icon: <Flame className="h-5 w-5" /> }
                ].map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveRegion(item.id)}
                    className={`group flex items-center justify-between w-full rounded-2xl p-4 sm:p-5 border text-base font-bold transition-all duration-300 cursor-pointer focus:outline-none animate-fade-in-up ${
                      activeRegion === item.id
                        ? 'bg-gradient-to-r from-[#50251f] to-[#3a1b16] border-[#50251f] text-white shadow-lg translate-x-2'
                        : 'bg-white border-[#E5E5DE]/80 text-[#2D2D2D] hover:bg-[#fcf9f1] hover:border-[#50251f]/30 hover:shadow-sm'
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`p-2 rounded-xl transition-colors duration-300 ${
                        activeRegion === item.id ? 'bg-white/20' : 'bg-[#50251f]/10 text-[#50251f] group-hover:bg-[#50251f]/20'
                      }`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </span>
                    <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                      activeRegion === item.id ? 'rotate-90 text-white/80' : 'text-[#2D2D2D]/40 group-hover:text-[#50251f]'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Display Card Column */}
            <div className="w-full lg:w-7/12 relative">
              {/* Background accent glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#50251f]/5 to-transparent blur-2xl rounded-[3rem] -z-10" />
              
              {/* Added key={activeRegion} to force re-render animations on tab switch */}
              <div key={activeRegion} className="rounded-[2.5rem] border border-[#E5E5DE]/80 bg-white/90 backdrop-blur-xl p-8 sm:p-12 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[460px] flex flex-col justify-between animate-fade-in">
                
                {/* Card Header info */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#50251f]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#50251f] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <Compass className="h-4 w-4" />
                    <span>Regional Specialty</span>
                  </div>
                  
                  <h3 className="font-display text-5xl sm:text-6xl text-[#2D2D2D] mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
                    {regions[activeRegion].title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-[#2D2D2D]/75 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {regions[activeRegion].description}
                  </p>

                  {/* Highlights Subsections */}
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2D2D2D] mb-6 pb-3 border-b border-[#E5E5DE]/80 flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 text-[#50251f] fill-[#50251f]" /> Menu Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                      {regions[activeRegion].highlights.map((dish, index) => (
                        <div key={index} className="flex flex-col group cursor-default">
                          <span className="font-sans font-bold text-[#2D2D2D] text-lg flex items-center justify-between group-hover:text-[#50251f] transition-colors duration-200">
                            {dish.name}
                            <span className="text-sm text-[#50251f] font-sans font-semibold">{dish.price}</span>
                          </span>
                          <span className="text-sm text-[#2D2D2D]/60 mt-1.5 leading-snug">{dish.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cultural Quote Footer inside Card */}
                <div className="mt-12 pt-6 border-t border-[#E5E5DE]/80 flex gap-4 items-start bg-gradient-to-br from-[#fcf9f1] to-white p-6 rounded-2xl animate-fade-in-up shadow-sm" style={{ animationDelay: '0.5s' }}>
                  <div className="p-2.5 rounded-full bg-[#50251f]/10 text-[#50251f] shrink-0">
                    <Quote className="h-5 w-5 fill-[#50251f]" />
                  </div>
                  <p className="text-sm sm:text-base text-[#2D2D2D]/80 italic leading-relaxed font-medium">
                    "{regions[activeRegion].cultureNote}"
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Love / Review section */}
      <section className="bg-white py-20 border-t border-[#E5E5DE]/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-sans">
              What Hinton Dancers & Diners Say
            </h2>
            <p className="mt-4 text-base text-[#2D2D2D]/75">
              Honest feedback from our beloved local food community.
            </p>
          </div>

          {/* Auto-scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden flex group py-4">
            {/* Edge fade gradients */}
            <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* The animated track */}
            <div className="flex shrink-0 gap-8 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] w-max">
              {[
                {
                  text: 'The Vada Pav tastes exactly like the ones I had in Mumbai. The spices are authentic and the chutney has the perfect heat.',
                  author: 'Aarav Patel',
                  rating: 5,
                  title: 'Authentic taste'
                },
                {
                  text: 'Namaste Hinton is a gem. The Tandoori Paneer Burger was so juicy and cooked perfectly. Extremely clean restaurant and friendly service!',
                  author: 'Sarah Thompson',
                  rating: 5,
                  title: 'Amazing service'
                },
                {
                  text: 'Finally, good quality Butter Chicken in Hinton! The cashew-tomato gravy is rich and flavorful. Highly recommend ordering with garlic naan.',
                  author: 'Michael G.',
                  rating: 5,
                  title: 'Best butter chicken'
                },
                {
                  text: 'The Vada Pav tastes exactly like the ones I had in Mumbai. The spices are authentic and the chutney has the perfect heat.',
                  author: 'Aarav Patel',
                  rating: 5,
                  title: 'Authentic taste'
                },
                {
                  text: 'Namaste Hinton is a gem. The Tandoori Paneer Burger was so juicy and cooked perfectly. Extremely clean restaurant and friendly service!',
                  author: 'Sarah Thompson',
                  rating: 5,
                  title: 'Amazing service'
                },
                {
                  text: 'Finally, good quality Butter Chicken in Hinton! The cashew-tomato gravy is rich and flavorful. Highly recommend ordering with garlic naan.',
                  author: 'Michael G.',
                  rating: 5,
                  title: 'Best butter chicken'
                }
              ].map((review, i) => (
                <div key={i} className="flex flex-col justify-between p-8 rounded-2xl border border-[#E5E5DE] bg-[#fcf9f1]/30 hover:bg-[#fcf9f1]/70 transition-colors duration-300 text-left w-[360px] md:w-[420px] shrink-0">
                  <div>
                    <div className="flex gap-1.5 mb-5 text-[#50251f]">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <h4 className="font-sans font-bold text-xl text-[#2D2D2D] mb-3">
                      "{review.title}"
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-[#2D2D2D]/80">
                      {review.text}
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-[#E5E5DE]/80">
                    <span className="text-sm md:text-base font-bold text-[#2D2D2D]">{review.author}</span>
                    <span className="text-xs uppercase tracking-widest block text-[#2D2D2D]/50 mt-1">Hinton Resident</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
