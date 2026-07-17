import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      name: 'Vada Pav',
      origin: 'Mumbai Street Classic',
      price: '$14.99',
      description: 'Golden-fried spiced potato dumpling (vada) nestled inside a soft, warm pav roll, seasoned with fiery dry garlic chutney and sweetened mint-tamarind spread.',
      tags: ['Vegetarian', 'Street Classic'],
      image: '/hero-dish.png', // We can showcase our beautiful food image here
      alt: 'Authentic Indian Vada Pav sandwich served with green chili',
      badge: 'Hot'
    },
    {
      id: 2,
      name: 'Tandoori Paneer Burger',
      origin: 'Namaste Special',
      price: '$19.99',
      description: 'A thick slab of organic cottage cheese marinated in hand-ground clay-oven spices, grilled to perfection and served with sliced onions, lettuce, and garlic-herb emulsion on a brioche bun.',
      tags: ['Vegetarian', 'Chef Favorite'],
      image: null,
      placeholderText: 'Tandoori Paneer Burger Visual Frame',
      alt: 'Grilled paneer burger with tandoori spices and dynamic sauces',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Butter Chicken',
      origin: 'Punjab Heritage',
      price: '$19.99',
      description: 'Tender tandoor-roasted chicken tikka pieces folded into a decadent, smooth gravy of tomatoes, cashew butter, and cream, scented with sun-dried fenugreek leaves.',
      tags: ['Non-Veg', 'Legendary Curry'],
      image: null,
      placeholderText: 'Butter Chicken Visual Frame',
      alt: 'Classic rich red butter chicken curry garnish with cream',
      badge: 'Best Seller'
    },
    {
      id: 4,
      name: 'Dal Makhani',
      origin: 'Slow-Simmered Traditional',
      price: '$17.99',
      description: 'Black lentils and red kidney beans slow-cooked overnight with fresh cream, unsalted butter, and organic tomato puree, developing a deep smoky flavor.',
      tags: ['Vegetarian', 'Slow Cooked'],
      image: null,
      placeholderText: 'Dal Makhani Visual Frame',
      alt: 'Creamy black dal served in a traditional copper bowl',
      badge: 'Signature'
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      
      {/* Title Header */}
      <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#8A5229]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8A5229] mb-4">
          <Sparkles className="h-3 w-3" />
          <span>House Specialties</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#2D2D2D] sm:text-4xl lg:text-5xl font-serif">
          Namaste Hinton Highlights
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#2D2D2D]/75">
          Explore our most beloved dishes, representing authentic tastes from active street hubs and traditional kitchens across India.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {highlights.map((item) => (
          <div 
            key={item.id}
            className="flex flex-col bg-white rounded-2xl border border-[#E5E5DE] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Image/Placeholder Frame */}
            <div className="aspect-[16/10] w-full bg-[#FAFAF6] relative overflow-hidden border-b border-[#E5E5DE]/85">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="h-full w-full object-cover hover:scale-102 transition-transform duration-200"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <div className="rounded-lg bg-white border border-[#E5E5DE]/50 px-4 py-2 text-xs font-medium text-[#2D2D2D]/60 shadow-sm max-w-[280px]">
                    {item.placeholderText}
                  </div>
                  <span className="mt-2 text-[10px] text-[#2D2D2D]/40 uppercase tracking-widest">
                    Asset Frame — {item.name}
                  </span>
                </div>
              )}

              {/* Dynamic Badge tag like New, Hot, Popular */}
              {item.badge && (
                <div className={`absolute top-4 left-4 rounded-lg px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm ${
                  item.badge === 'Hot' ? 'bg-red-600' :
                  item.badge === 'New' ? 'bg-emerald-600' :
                  item.badge === 'Best Seller' ? 'bg-amber-600' : 'bg-[#8A5229]'
                }`}>
                  {item.badge}
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 sm:p-8 text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  {/* Origin */}
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[#8A5229]">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.origin}
                  </span>
                  {/* Price */}
                  <span className="font-serif text-lg font-semibold text-[#2D2D2D]">
                    {item.price}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2D2D2D] mb-3">
                  {item.name}
                </h3>
                
                <p className="text-sm leading-relaxed text-[#2D2D2D]/75 mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E5DE]/60">
                {item.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="rounded-full bg-[#FAFAF6] border border-[#E5E5DE] px-3 py-1 text-[10px] font-semibold text-[#2D2D2D]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
