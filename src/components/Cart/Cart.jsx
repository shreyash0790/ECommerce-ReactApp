import Modal from "../UI/Modal";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";

const Cart = (props) => {
  const userEmail = localStorage.getItem("email");
  const cartCtx = useContext(CartContext);
  const [fetchedCartItems, setFetchedCartItems] = useState([]);

  const cartItems = cartCtx.items;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://react-movies-3a05d-default-rtdb.firebaseio.com/cart.json?orderBy="Email"&equalTo="${userEmail}"`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();

        const loadedItems = [];

        for (const key in data) {
          loadedItems.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            imageSrc: data[key].imageSrc,
            Quantity: data[key].Quantity,
          });
        }
        setFetchedCartItems(loadedItems);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cartItems, userEmail]);

  const removeItemHandler = async (ItemId) => {
    const item = fetchedCartItems.filter((item)=> item.id === ItemId)[0];
   
    try {

      // Delete item from Firebase Realtime Database
      const deleteUrl = `https://react-movies-3a05d-default-rtdb.firebaseio.com/cart/${item.id}.json`;
      const response = await fetch(deleteUrl, {
        method: 'DELETE'
      });
      if (!response.ok) {
        const data = await response.json();
        console.log(data)
      }
    } catch (error) {
      console.error(error);
    }
    cartCtx.removeItems(ItemId);
  };

  const totalPrice = fetchedCartItems.reduce((curr, item) => {
    let totalprice = parseInt(
      item.price.replace(/[^0-9]+/g, "") * item.Quantity
    );
    return curr + totalprice;
  }, 0);

  return (
    <Modal OnClose={props.OnClose}>
      <ul className="flex flex-col divide-y divide-gray-200">
        {fetchedCartItems.map((items) => (
          <li
            key={items.id}
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-md  outline-none dark:border-black sm:h-20 sm:w-20"
                      src={items.imageSrc}
                      alt={items.name}
                    />
                    <h3 className=" font-protest-r text-2xl font-bold text-black leading-snug sm:pr-8">
                      {items.name}
                    </h3>
                    <p className="text-sm text-black">x{items.Quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-black ">
                      {items.price}
                    </p>
                    <button
                      type="button"
                      className="rounded-full border bg-blue-900 mt-3 px-2 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={() => removeItemHandler(items.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="space-y-1 text-right text-lg font-semibold text-black pb-5">
        <p>
          Total Price:
          <span className="font-semibold"> ₹{totalPrice}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-full border border-blue-900 px-5 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={props.onClose}
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-full border  bg-blue-950 px-5 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};
export default Cart;
