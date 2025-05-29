import React from 'react';

type Product = {
  title: string;
  image: string;
  price: number;
  rating?: number;
  description: string;
};

interface ProductGridProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={index}
          className={`bg-white shadow rounded p-4 flex flex-col transform transition duration-500 ease-in-out hover:shadow-2xl hover:-translate-y-1 animate-fade-in ${product.title === 'Smartphone' ? 'col-span-1 lg:col-span-2' : ''}`}
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-40 object-contain mb-4 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <h3 className="text-lg font-semibold text-black">{product.title}</h3>
          <p className="text-gray-600 text-black">${product.price}</p>
          {product.rating && (
            <p className="text-yellow-500 text-black">
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </p>
          )}
          <p className="text-sm text-gray-500 mb-2 text-black">{product.description}</p>
          <button
            className="mt-auto bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700 transition-colors duration-300"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;