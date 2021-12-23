import React, { useEffect, useState } from "react";
import { useLoggedIn, addToCart } from "cart/cart";
import { getProducts } from "./products";

export const HomeContent = () => {
  const [products, setProducts] = useState([]);
  const loggedIn = useLoggedIn();

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="my-10 grid grid-cols-5">
      {products.map((product) => (
        <div key={`product_${product.id}`}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          {loggedIn && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-md text-sm"
              onClick={() => addToCart(product.id)}
              id={`addToCart_${product.id}`}
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
