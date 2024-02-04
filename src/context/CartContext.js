import { createContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (item) => {
    setCart([...cart, item]);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      //value={{ items: 5, cartLogger: () => console.log("items clicked") }}
      value={{ cart, handleCartUpdate }}
    >
      {children}
    </CartContext.Provider>
  );
};
