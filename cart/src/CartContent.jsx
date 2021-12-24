import React, { useState, useEffect } from "react";
import { cart, clearCart, useLoggedIn } from "cart/cart";

export default function CartContent() {
  const [items, setItems] = useState([]);
  const loggedIn = useLoggedIn();
  useEffect(() => {
    return cart.subscribe((val) => setItems(val?.cartItems ?? []));
  }, []);

  return (
    <div className="my-10">
      <div className="mb-5">
        {items.map((item) => (
          <p key={item.id}>
            {item.name} : {item.price} ({item.quantity})
          </p>
        ))}
      </div>
      {loggedIn && <div>
        <b>Total: {items.reduce((a, b) => a + b.quantity * b.price, 0)}</b>
      </div>}
      {items.length > 0 && (
        <button
          className="border border-green-900 bg-white text-green-800 py-1 px-2 rounded-md mt-5"
          onClick={clearCart}
          id="clearBtn"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}
