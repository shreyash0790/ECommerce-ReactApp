import { Outlet } from "react-router-dom";
import { Fragment , useState} from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Cart from "../components/Cart/Cart";


const RootLayout = function () {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShow={showCarthandler} />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
