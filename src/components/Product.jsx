import { useContext } from "react";
import starImage from "../assets/star.png";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

function Product({ product }) {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);

  const handleAddToCart = (product) => {
    setCartItems(() => {
      setCartItems([...cartItems, product]);
    });
  };

  return (
    <ul>
      <li>ID: {product.id}</li>
      <li>Title: {product.title}</li>
      <li>
        Rate:{" "}
        {Array(product.rate)
          .fill(0)
          .map(() => {
            return (
              <img
                src={starImage}
                alt="star image "
                width={"16px"}
                height={"16px"}
              />
            );
          })}
      </li>
      <li>Price: {product.price}</li>
      <button onClick={() => handleAddToCart(product)}>Add To Cart </button>
    </ul>
  );
}

export default Product;
