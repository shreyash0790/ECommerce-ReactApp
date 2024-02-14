import { Route, Routes} from "react-router-dom";
import { useState } from "react";

import CartProvider from "./components/Context/CartProvider";
import Store from "./pages/Store";
import About from "./pages/About";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";

import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";

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
      <main>
        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/store/:productId" element={<ProductDetails />} />
            
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
