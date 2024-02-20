import { Route, Routes} from "react-router-dom";
import { useContext, useState } from "react";

import CartProvider from "./components/Context/CartProvider";
import Store from "./pages/Store";
import About from "./pages/About";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUs";

import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import ErrorPage from "./pages/ErrorPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import AuthContext from "./components/Context/AuthContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const authCtx=useContext(AuthContext);

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
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={!authCtx.isLoggedIn && <Login />} />
        <Route path="/profile" element={authCtx.isLoggedIn && <UserProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/store" element={authCtx.isLoggedIn && <Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/store/:productId" element={authCtx.isLoggedIn && <ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
            
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
