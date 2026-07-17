import React, { useState, useMemo } from 'react';
import { Search, Sparkles, AlertCircle, ShoppingBag, Info } from 'lucide-react';
import menuData from '../data/menu.json';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers_burgers', name: 'Appetizers & Burgers', categories: ['Appetizers', 'BURGERS'] },
    { id: 'main_curries_rice', name: 'Curries & Rice', categories: ['VEGETARIAN', 'CHICKEN SPECIALTIES', 'GOAT & FISH', 'DAL SELECTIONS', 'BIRYANI & RICE'] },
    { id: 'breads_sides', name: 'Breads & Sides', categories: ['BREADS', 'SIDES & CONDIMENTS'] },
    { id: 'beverages', name: 'Beverages', categories: ['Beverages'] }
  ];

  // Filter items based on active tab, status, and search query
  const filteredItems = useMemo(() => {
    return menuData.filter((item) => {
      // 1. Filter out inactive items
      if (item.Status !== 'Active') return false;

      // 2. Filter by tab category
      if (activeTab !== 'all') {
        const currentTab = tabs.find(t => t.id === activeTab);
        if (currentTab && !currentTab.categories.includes(item.Category)) {
          return false;
        }
      }

      // 3. Filter by search query (case-insensitive)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const itemName = item.Item ? item.Item.toLowerCase() : '';
        const itemCategory = item.Category ? item.Category.toLowerCase() : '';
        return itemName.includes(query) || itemCategory.includes(query);
      }

      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      
      {/* Title Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#50251f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#50251f] mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Namaste Hinton Culinary Experience</span>
        </div>
        <h1 className="text-5xl tracking-tight text-[#2D2D2D] sm:text-6xl lg:text-7xl font-display font-normal">
          Our Full Menu
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#2D2D2D]/75">
          Browse through our curated list of 40+ authentic dishes. Use the categories or search bar below to find your favorites.
        </p>
      </div>

      {/* Search Bar & Tab Layout */}
      <div className="flex flex-col gap-6 mb-12 sm:mb-16">
        
        {/* Interactive Search */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-[#2D2D2D]/40" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim() !== '') {
                setActiveTab('all'); // Switch to 'all' tab for global search
              }
            }}
            className="block w-full rounded-full border border-[#E5E5DE] bg-white py-4 pl-11 pr-4 text-base text-[#2D2D2D] placeholder-[#2D2D2D]/45 focus:border-[#50251f] focus:outline-none focus:ring-2 focus:ring-[#50251f]/20 shadow-sm transition-all"
            placeholder="Search Vada Pav, Butter Chicken, Naan..."
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs font-bold uppercase tracking-wider text-[#50251f] hover:text-[#2D2D2D] focus:outline-none"
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab Switchers */}
        <div className="flex justify-center border-b border-[#E5E5DE]/80 mt-2">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 -mb-[1px] max-w-5xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`px-5 py-4 text-sm sm:text-base font-bold tracking-wide border-b-2 cursor-pointer transition-all duration-300 focus:outline-none ${
                    isActive 
                      ? 'border-[#50251f] text-[#50251f]' 
                      : 'border-transparent text-[#2D2D2D]/60 hover:text-[#2D2D2D] hover:border-[#E5E5DE]'
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Menu Grid List */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="relative flex flex-col justify-between p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E5DE]/80 hover:border-[#50251f]/30 transition-all duration-500 text-left group shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(80,37,31,0.15)] hover:-translate-y-2 overflow-hidden cursor-default"
            >
              {/* Elegant Top Decorative Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#50251f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Subtle Animated Glass Gradient Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#50251f]/5 via-[#7a3930]/10 to-[#3a1b16]/5 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient-shift_3s_ease_infinite] transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    {/* Category Tag */}
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#50251f]/80 mt-2">
                      {item.Category}
                    </span>
                    
                    {/* Prominent Floating Price Badge */}
                    <div className="shrink-0 rounded-full bg-[#fcf9f1] border border-[#50251f]/10 px-4 py-2 shadow-sm group-hover:bg-[#50251f] transition-colors duration-500">
                      <span className="text-lg sm:text-xl font-bold font-sans tracking-tight text-[#50251f] group-hover:text-white transition-colors duration-500">
                        {item.Price}
                      </span>
                    </div>
                  </div>

                  {/* Item Name */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight text-[#2D2D2D] group-hover:text-[#50251f] transition-colors duration-500 leading-tight mb-3">
                    {item.Item}
                  </h3>
                  
                  {/* Item Description */}
                  {item.Description && (
                    <p className="text-sm sm:text-base text-[#2D2D2D]/70 group-hover:text-[#2D2D2D]/90 transition-colors duration-500 leading-relaxed mb-6 pr-4 line-clamp-3">
                      {item.Description}
                    </p>
                  )}
                  
                  {/* Elegant dashed separator accent */}
                  <div className="w-12 border-b-2 border-dashed border-[#50251f]/30 group-hover:border-[#50251f]/60 group-hover:w-24 transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md text-center py-16 px-6 bg-white border border-[#E5E5DE] rounded-2xl shadow-sm">
          <AlertCircle className="mx-auto h-10 w-10 text-[#2D2D2D]/30 mb-4" />
          <h3 className="font-sans text-lg font-bold text-[#2D2D2D] mb-2">No Items Found</h3>
          <p className="text-sm text-[#2D2D2D]/70 mb-6">
            We couldn\'t find any menu items matching your filters or search query.
          </p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="rounded-full bg-[#50251f] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#3a1b16] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Online Order CTA */}
      <div className="mt-20 border border-[#E5E5DE] bg-gradient-to-br from-[#ffffff] to-[#f4f1ea] rounded-3xl p-8 sm:p-12 text-center text-[#2D2D2D] relative overflow-hidden shadow-md">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#50251f]/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#50251f]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <ShoppingBag className="h-8 w-8 text-[#50251f] mb-4" />
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Hungry? Order Online For Pickup & Delivery
          </h2>
          <p className="text-sm leading-relaxed text-[#2D2D2D]/80 mb-8 max-w-md">
            Skip the queue. Select your items, pay securely online, and pick up fresh from our counter or get it delivered straight to your door.
          </p>
          <a
            href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#50251f] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#3a1b16] transition-all duration-200"
          >
            Order Online
            <Sparkles className="h-4 w-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
