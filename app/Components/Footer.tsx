import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center gap-4">
      <div>
        <h3 className="font-bold mb-2 text-white">Filters</h3>
        <p className="text-white">All</p>
        <p className="text-white">Electronics</p>
        <p className="text-white">Clothing</p>
        <p className="text-white">© 2024 American</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-white">About Us</h3>
        <p className="text-white">About Us</p>
        <p className="text-white">Contact</p>
      </div>
      <div>
        <h3 className="font-bold mb-2 text-white">Follow Us</h3>
        <div className="flex justify-center gap-4 mt-2 text-white">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
