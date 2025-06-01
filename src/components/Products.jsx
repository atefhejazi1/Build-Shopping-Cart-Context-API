import React, { useEffect, useState } from "react";
import Product from "./Product";

const demyProducts = [
  {
    id: 1,
    title: "product 1",
    price: 250,
    rate: 3,
  },
  {
    id: 2,
    title: "product 2",
    price: 350,
    rate: 2,
  },
  {
    id: 3,
    title: "product 3",
    price: 250,
    rate: 5,
  },
];

const initialCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

function Products() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  
  return (
    <>
      {demyProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          setCartItems={setCartItems}
        />
      ))}

      <h1>Cart {cartItems.length} </h1>

      {cartItems.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default Products;
