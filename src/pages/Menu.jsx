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
        <div className="inline-flex items-center gap-2 rounded-full bg-[#D97706]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#D97706] mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Namaste Hinton Culinary Experience</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-[#2D2D2D] sm:text-4xl lg:text-5xl font-serif">
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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full rounded-xl border border-[#E5E5DE] bg-white py-3.5 pl-10 pr-4 text-sm text-[#2D2D2D] placeholder-[#2D2D2D]/40 focus:border-[#D97706] focus:outline-none focus:ring-1 focus:ring-[#D97706] shadow-sm transition-all"
            placeholder="Search Vada Pav, Butter Chicken, Naan..."
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs font-semibold text-[#D97706] hover:text-[#2D2D2D] focus:outline-none"
            >
              Clear
            </button>
          )}
        </div>

        {/* Tab Switchers */}
        <div className="flex justify-center border-b border-[#E5E5DE]/80">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 -mb-[1px] max-w-4xl">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                  }}
                  className={`px-4 py-3 text-xs sm:text-sm font-medium tracking-wide border-b-2 cursor-pointer transition-all duration-200 focus:outline-none ${
                    isActive 
                      ? 'border-[#D97706] text-[#D97706]' 
                      : 'border-transparent text-[#2D2D2D]/70 hover:text-[#2D2D2D] hover:border-[#E5E5DE]'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl bg-white border border-[#E5E5DE]/65 hover:border-[#D97706]/35 transition-all duration-200 text-left group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Category & Availability row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#D97706] bg-[#D97706]/5 px-2 py-0.5 rounded">
                    {item.Category}
                  </span>
                  <span className="text-[9px] text-[#2D2D2D]/40 font-medium tracking-wider">
                    {item.Availability}
                  </span>
                </div>

                {/* Item Name */}
                <h3 className="font-serif text-lg font-bold text-[#2D2D2D] group-hover:text-[#D97706] transition-colors duration-200">
                  {item.Item}
                </h3>
              </div>

              {/* Pricing & Add to Cart simulator */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#E5E5DE]/50">
                <span className="font-serif text-lg font-bold text-[#2D2D2D]">
                  {item.Price}
                </span>
                
                <a
                  href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#2D2D2D] hover:text-[#D97706] transition-colors"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Order &rarr;
                </a>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-md text-center py-16 px-6 bg-white border border-[#E5E5DE] rounded-2xl shadow-sm">
          <AlertCircle className="mx-auto h-10 w-10 text-[#2D2D2D]/30 mb-4" />
          <h3 className="font-serif text-lg font-bold text-[#2D2D2D] mb-2">No Items Found</h3>
          <p className="text-sm text-[#2D2D2D]/70 mb-6">
            We couldn\'t find any menu items matching your filters or search query.
          </p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
            }}
            className="rounded-full bg-[#2D2D2D] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#D97706] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Online Order CTA */}
      <div className="mt-20 border border-[#E5E5DE] bg-[#2D2D2D] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-md">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <ShoppingBag className="h-8 w-8 text-[#D97706] mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Hungry? Order Online For Pickup & Delivery
          </h2>
          <p className="text-sm leading-relaxed text-white/80 mb-8 max-w-md">
            Skip the queue. Select your items, pay securely online, and pick up fresh from our counter or get it delivered straight to your door.
          </p>
          <a
            href="https://order.slatexpos.com/namaste-hinton/namaste-hinton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#D97706] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#2D2D2D] transition-all duration-200"
          >
            Order on SlateXpos
            <Sparkles className="h-4 w-4" />
          </a>
        </div>
      </div>

    </div>
  );
}
