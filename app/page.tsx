"use client";

import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ProductGrid from './Components/ProductGrid';
import Footer from './Components/Footer';

const products = [
  { title: 'Running Shoes', price: 99, image: '/shoe.avif', category: 'Clothing', description: 'Comfortable running shoes', rating: 4 },
  { title: 'Wireless Headphones', price: 199, image: '/headphones.jpg', category: 'Electronics', description: 'High-quality wireless headphones', rating: 5 },
  { title: 'Backpack', price: 129, image: '/bag.jpg', category: 'Clothing', description: 'Durable and stylish backpack', rating: 4 },
  { title: 'Smartwatch', price: 249, image: '/smartwatch.webp', category: 'Electronics', description: 'Feature-rich smartwatch', rating: 4 },
  { title: 'Sunglasses', price: 149, image: '/sunglasses.avif', category: 'Clothing', description: 'Trendy sunglasses for all occasions', rating: 3 },
  { title: 'Digital Camera', price: 499, image: '/camera.jpg', category: 'Electronics', description: 'Capture moments with this digital camera', rating: 5 },
  { title: 'T-shirt', price: 29, image: '/t.jpg', category: 'Clothing', description: 'Soft cotton t-shirt', rating: 4 },
  { title: 'Smartphone', price: 699, image: '/smartphone.jpg', category: 'Electronics', rating: 4, description: 'Lorem ipsum dolor amet, consectetur euisagend. Category Electronics' },
];

export default function Home() {
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // loader duration
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (product: { title: any; }) => {
    alert(`Added ${product.title} to cart`);
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesPrice = product.price <= price;
    const matchesSearch = searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 p-4 sm:p-6 bg-gray-100 flex flex-col lg:flex-row">
        <aside className="w-full lg:w-64 mb-4 lg:mb-0 lg:pr-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2 text-black">Category</h2>
            {['All', 'Electronics', 'Clothing', 'Home'].map((cat) => (
              <div key={cat} className="text-black">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={category === cat}
                  onChange={(e) => setCategory(e.target.value)}
                /> {cat}
              </div>
            ))}

            <h2 className="text-lg font-semibold mt-4 text-black">Price</h2>
            <input
              type="range"
              min="0"
              max="1000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-black">${price}</p>
          </div>
        </aside>

        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-black">Product Listing</h2>
          <ProductGrid products={filteredProducts} handleAddToCart={handleAddToCart} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
