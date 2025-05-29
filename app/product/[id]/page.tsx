"use client";
import { useCart } from "@/app/context/CartContext";
import { useParams } from "next/navigation";
// import { useCart } from "../../../context/CartContext";
import {  useState } from "react";

const dummyProducts = [
  {
    id: "1",
    title: "Running Shoes",
    image: "/shoe.avif",
    price: 99,
    description: "Comfortable running shoes",
    category: "Clothing",
  },
  {
    id: "2",
    title: "Headphones",
    image: "/headphones.jpg",
    price: 199,
    description: "Wireless noise-cancelling headphones",
    category: "Electronics",
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = dummyProducts.find((p) => p.id === id);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-8 bg-gray-50 min-h-screen">
      <div className="w-full lg:w-1/2">
        <img src={product.image} alt={product.title} className="rounded-lg w-full" />
      </div>
      <div className="w-full lg:w-1/2 text-black">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-green-600 font-semibold mb-2">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4 font-medium">Category: {product.category}</p>

        <div className="flex items-center gap-4 mb-4">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border p-1 rounded w-16"
          />
        </div>

        <button
          onClick={() => addToCart({ ...product, quantity })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}