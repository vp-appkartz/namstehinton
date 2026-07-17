import React, { useState } from 'react';
import { ArrowRight, Sparkles, Heart, Clock, Compass, ChevronRight, MessageSquare, Star, ArrowUpRight } from 'lucide-react';

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
      image: null,
      placeholderText: 'Tandoori Paneer Burger Frame',
      accentStyle: 'from-amber-600/10 to-orange-600/10 text-[#8A5229]',
      bgColor: 'bg-orange-50/30'
    },
    {
      name: 'Butter Chicken',
      tagline: 'Punjab Royal Heritage',
      price: '$19.99',
      description: 'Charcoal-grilled chicken tikka chunks simmered in a luscious tomato, butter, and cashew cream gravy, infused with hand-crushed fenugreek.',
      tag: 'Most Loved',
      image: null,
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
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left animate-fade-in-up">
              
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#8A5229]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8A5229] animate-fade-in">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Elevated Indian Gastronomy</span>
              </div>
              
              <div className="font-display text-5xl sm:text-6xl text-[#8A5229] mt-6 -mb-3 self-start select-none">
                Welcome to
              </div>
              
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2D2D2D] leading-[1.1] font-sans">
                Authentic Indian flavours, <span className="font-script text-[#8A5229] font-normal lowercase tracking-wide block sm:inline">crafted</span> for the modern table.
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
                        ? 'bg-[#8A5229] text-white shadow-sm'
                        : 'bg-transparent text-[#2D2D2D]/75 hover:bg-[#FAFAF6] hover:text-[#2D2D2D]'
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#8A5229] px-7 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#6D3D1D] transition-all duration-200 cursor-pointer focus:outline-none active:scale-98"
                >
                  View Full Menu
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={() => setRoute('contact')}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E5DE] bg-white px-7 py-4 text-sm font-semibold text-[#2D2D2D] hover:bg-[#FAFAF6] hover:border-[#2D2D2D]/35 transition-all duration-200 cursor-pointer focus:outline-none"
                >
                  Find Hours & Directions
                </button>
              </div>
            </div>

            {/* Right Interactive Image Container Column */}
            <div className="lg:col-span-6 lg:pl-8 animate-scale-up">
              <div className="relative mx-auto max-w-[480px] lg:max-w-none">
                
                {/* Decorative border glow */}
                <div className="absolute -inset-4 rounded-3xl border border-[#E5E5DE]/60 bg-[#FAFAF6]/50 -z-10 transition-colors duration-300" />
                
                {/* Active Interactive Dish Display Card */}
                <div className="overflow-hidden rounded-2xl border border-[#E5E5DE] bg-white p-4 shadow-md transition-all duration-300">
                  <div className={`aspect-[4/3] w-full rounded-xl overflow-hidden relative group transition-colors duration-300 ${heroDishes[activeDishIdx].bgColor}`}>
                    
                    {heroDishes[activeDishIdx].image ? (
                      <img 
                        src={heroDishes[activeDishIdx].image} 
                        alt={heroDishes[activeDishIdx].name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
                        loading="eager"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center select-none">
                        <div className={`rounded-xl border border-[#E5E5DE]/50 bg-white/85 px-5 py-3 text-xs font-bold shadow-sm max-w-[260px] tracking-wider uppercase`}>
                          {heroDishes[activeDishIdx].placeholderText}
                        </div>
                        <span className="mt-3 text-[10px] text-[#2D2D2D]/40 uppercase tracking-widest font-semibold">
                          NAMASTE SPECIAL FRAME
                        </span>
                      </div>
                    )}

                    {/* Accent Badges */}
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                      {heroDishes[activeDishIdx].tag}
                    </div>

                    <div className="absolute bottom-3 right-3 bg-[#FAFAF6] text-[#2D2D2D] text-sm font-bold px-3.5 py-1.5 rounded-lg border border-[#E5E5DE] shadow-sm">
                      {heroDishes[activeDishIdx].price}
                    </div>
                  </div>

                  {/* Dynamic description of selected dish */}
                  <div className="mt-5 text-left p-2 animate-fade-in">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#8A5229]">
                      {heroDishes[activeDishIdx].tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2D2D2D] mt-1 mb-2">
                      {heroDishes[activeDishIdx].name}
                    </h3>
                    <p className="text-base text-[#2D2D2D]/75 leading-relaxed">
                      {heroDishes[activeDishIdx].description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8A5229] hover:text-[#2D2D2D] transition-colors"
                      >
                        Order Online Now
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <span className="text-[10px] font-semibold text-[#2D2D2D]/40 uppercase tracking-wider">
                        Click tabs to change preview
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Culinary Philosophy Section */}
      <section className="bg-white border-y border-[#E5E5DE]/80 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-serif">
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
              <div className="flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/50 bg-[#FAFAF6]/50 hover:bg-[#FAFAF6] transition-all duration-200 hover:shadow-sm">
                <div className="rounded-lg bg-[#8A5229]/10 p-3.5 text-[#8A5229] mb-6">
                  <Compass className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-2">Regional Roots</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/70">
                  From Bombay beach snacks to rich Punjabi road-side gravies, our menus capture the diverse and authentic food maps of specific Indian cities.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/50 bg-[#FAFAF6]/50 hover:bg-[#FAFAF6] transition-all duration-200 hover:shadow-sm">
                <div className="rounded-lg bg-[#8A5229]/10 p-3.5 text-[#8A5229] mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-2">Authentic & Pure</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/70">
                  We use stone-ground spices and organic flour. Everything is 100% vegetarian-friendly, with substantial vegan adjustments available.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start text-left p-8 rounded-2xl border border-[#E5E5DE]/50 bg-[#FAFAF6]/50 hover:bg-[#FAFAF6] transition-all duration-200 hover:shadow-sm">
                <div className="rounded-lg bg-[#8A5229]/10 p-3.5 text-[#8A5229] mb-6">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-2">Fresh to Order</h3>
                <p className="text-base leading-relaxed text-[#2D2D2D]/70">
                  We prepare our burger patties daily, bake our naans in high-heat ovens instantly, and assemble all chaats right when you place your order.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Regional Journey Section */}
      <section className="py-20 md:py-28 bg-[#FAFAF6]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            
            {/* Left Content Side: Interactive navigation */}
            <div className="w-full lg:w-5/12 text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A5229]">Interactive Taste Maps</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-serif leading-tight">
                Explore the culinary regions of India.
              </h2>
              
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#2D2D2D]/75">
                Our food tells the story of regional spice routes. Click on the regional buttons below to discover local delicacies and food history.
              </p>

              {/* Regional selector tabs */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { id: 'mumbai', name: 'Mumbai Coastline', icon: '🌊' },
                  { id: 'gujarat', name: 'Gujarat Heritage', icon: '🌾' },
                  { id: 'punjab', name: 'Punjab Heartland', icon: '🔥' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveRegion(item.id)}
                    className={`flex items-center justify-between w-full rounded-xl p-4 border text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none ${
                      activeRegion === item.id
                        ? 'bg-[#8A5229] border-[#8A5229] text-white shadow-sm translate-x-1'
                        : 'bg-white border-[#E5E5DE] text-[#2D2D2D] hover:bg-[#FAFAF6]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-base">{item.icon}</span>
                      {item.name}
                    </span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                      activeRegion === item.id ? 'rotate-90' : ''
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Display Card Column */}
            <div className="w-full lg:w-7/12">
              <div className="rounded-3xl border border-[#E5E5DE] bg-white p-6 sm:p-10 text-left shadow-sm min-h-[420px] flex flex-col justify-between animate-fade-in">
                
                {/* Card Header info */}
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#8A5229]/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#8A5229] mb-6">
                    <Compass className="h-3.5 w-3.5" />
                    <span>Regional Specialty</span>
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-4">
                    {regions[activeRegion].title}
                  </h3>
                  
                  <p className="text-base sm:text-lg leading-relaxed text-[#2D2D2D]/75 mb-8">
                    {regions[activeRegion].description}
                  </p>

                  {/* Highlights Subsections */}
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2D2D2D] mb-4 pb-2 border-b border-[#E5E5DE]">
                    Menu Highlights from this Region
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {regions[activeRegion].highlights.map((dish, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="font-serif font-bold text-[#2D2D2D] text-lg flex items-center justify-between">
                          {dish.name}
                          <span className="text-sm text-[#8A5229] font-sans font-semibold">{dish.price}</span>
                        </span>
                        <span className="text-xs text-[#2D2D2D]/60 mt-1">{dish.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Quote Footer inside Card */}
                <div className="mt-8 pt-6 border-t border-[#E5E5DE]/80 flex gap-3 items-start bg-[#FAFAF6]/50 p-4 rounded-xl">
                  <div className="text-lg">💡</div>
                  <p className="text-xs sm:text-sm text-[#2D2D2D]/70 italic leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2D2D] font-serif">
              What Hinton Dancers & Diners Say
            </h2>
            <p className="mt-4 text-base text-[#2D2D2D]/75">
              Honest feedback from our beloved local food community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              }
            ].map((review, i) => (
              <div key={i} className="flex flex-col justify-between p-6 rounded-2xl border border-[#E5E5DE] bg-[#FAFAF6]/30 text-left">
                <div>
                  <div className="flex gap-1 mb-4 text-[#8A5229]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#2D2D2D] mb-2">
                    "{review.title}"
                  </h4>
                  <p className="text-sm leading-relaxed text-[#2D2D2D]/75">
                    {review.text}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E5E5DE]/60">
                  <span className="text-xs font-bold text-[#2D2D2D]">{review.author}</span>
                  <span className="text-[10px] text-[#2D2D2D]/45 uppercase tracking-wider block">Hinton Resident</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
