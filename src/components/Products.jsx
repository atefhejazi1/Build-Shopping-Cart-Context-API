import React, { useContext } from "react";
import Product from "./Product";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

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

function Products() {
  const { cartItems } = useContext(ShoppingCartContext); // فك القيمة من الكونتكس

  return (
    <>
      {demyProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <h1>Cart {cartItems.length} </h1>

      {cartItems.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default Products;
