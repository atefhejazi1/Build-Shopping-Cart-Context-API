import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext({});

function ShoppingCartContextProvider({ children }) {
  const initialCartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
