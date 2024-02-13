
import { createBrowserRouter,RouterProvider } from "react-router-dom";


import RootLayout from "./pages/RootLayout";
import CartProvider from "./components/Context/CartProvider";
import Store from "./pages/Store";
import About from "./pages/About";
import HomePage from "./pages/Home";




function App() {
 

const router=createBrowserRouter([{
path:'/',
element:<RootLayout />,
children:[
  {
    path:'/store',
    element:<Store />
  },
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/home',
    element:<HomePage />
  }
]



}])




  return (
   <CartProvider>
  <RouterProvider router={router} />
   </CartProvider>
  
     
   
  );
}

export default App;

