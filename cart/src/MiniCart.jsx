import React, { useEffect, useState } from "react";
import { cart, clearCart } from "./cart";

export default function MiniCart() {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((val) => setItems(val?.cartItems));
  }, []);

  if (!items) return null;
  
  return (
    <>
      <span onClick={() => setShowCart(!showCart)}>
        <i className="ri-shopping-cart-2-fill text-2xl" id="showCart"></i>
        {items.length}
      </span>
      {showCart && (
        <div
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -265,
          }}
        >
          {items.map((item) => (
            <p className="text-sm" key={item.id}>
              {item.name} : {item.price} ({item.quantity})
            </p>
          ))}
          <b className="text-sm">
            {" "}
            Total Price: {items.reduce((a, b) => a + b.quantity * b.price, 0)}
          </b>
          {items.length>0 && <button
            className="border border-green-900 bg-white text-green-800 py-1 px-2 rounded-md text-sm ml-5"
            onClick={clearCart}
            id="clearBtn"
          >
            Clear Cart
          </button>}
        </div>
      )}
    </>
  );
}
