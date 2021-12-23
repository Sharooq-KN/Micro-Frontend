import React, { useState, useEffect } from "react";
import { cart, clearCart } from "cart/cart";

export default function CartContent() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    return cart.subscribe((val) => setItems(val?.cartItems ?? []));
  }, []);

  return (
    // <div className="flex flex-column justify-between my-10">
    //   <div className="text-sm">JWT: {token}</div>
    //   <div className="relative">
    //     <Login />
    //     <MiniCart />
    //   </div>
    // </div>
    <div className="my-10">
      <div className="mb-5">
        {items.map((item) => (
          <p key={item.id}>
            {item.name} : {item.price} ({item.quantity})
          </p>
        ))}
      </div>
      {items.length > 0 && (
        <>
          <div>
            <b>Total: {items.reduce((a, b) => a + b.quantity * b.price, 0)}</b>
          </div>
          <button
            className="border border-green-900 bg-white text-green-800 py-1 px-2 rounded-md mt-5"
            onClick={clearCart}
            id="clearBtn"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
