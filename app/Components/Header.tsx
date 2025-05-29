'use client';

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
// import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const { cartItems } = useCart();
  const router = useRouter();

  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

  return (
    <header className="bg-blue-900 text-white p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      <div className="text-2xl font-bold cursor-pointer" onClick={() => router.push('/')}>
        Logo
      </div>

      <div className="flex items-center w-full sm:w-auto flex-1 sm:mx-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 p-2 rounded-l bg-white text-black min-w-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-blue-700 p-2 rounded-r">
          <FaSearch />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer" onClick={() => router.push('/cart')}>
          <FaShoppingCart className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
