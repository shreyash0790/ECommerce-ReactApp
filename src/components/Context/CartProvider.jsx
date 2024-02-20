import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);

  const addItemsHandler = async (item) => {
    try {
      updatedItems((prevItem) => [...prevItem, item]);

      await fetch(
        "https://react-movies-3a05d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "POST",
          body: JSON.stringify(item),
        }
      );


    } catch (err) {
      console.log(err);
    }
  };
  const removeItemsHandler = (id) => {
    updatedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartItems = {
    items: items,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartItems}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
