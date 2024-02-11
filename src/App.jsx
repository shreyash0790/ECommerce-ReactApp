
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"
import Products from "./components/Products/Products"
import {  useState } from "react";
import CartProvider from "./components/store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
   <CartProvider>
   {cartIsShown && <Cart onClose={hideCarthandler} />}
   <Header onShow={showCarthandler} />
   <Products />
  <Footer />
   </CartProvider>
  
     
   
  );
}

export default App;

