'use client';

import { useCart } from "../context/CartContext";

// import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity ?? 1), 0);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.title} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.title, Number(e.target.value))}
                    className="w-16 border rounded px-2 py-1"
                  />
                  <button
                    onClick={() => removeFromCart(item.title)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
