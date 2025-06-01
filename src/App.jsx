import Products from "./components/Products";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Products />
    </ShoppingCartContextProvider>
  );
}

export default App;
