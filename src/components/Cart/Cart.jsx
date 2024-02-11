import Modal from "../UI/Modal";



import aCasual from '../../assets/ShoeImg/aCasual.png'
import nCasual from '../../assets/ShoeImg/nCasual.jpg'




const cartItems=[
  {
      id: 1,
      name: "Nike-Sneakers",
      description: "For Casual wear",
      price: "₹3300",
      imageSrc: nCasual,
    },
    {
      id: 2,
      name: "Adidas-Superstar",
      description: "To rock the party",
      price: "₹6000",
      imageSrc: aCasual,
    },
    
]


const Cart = (props) => {
 
 
  return (
   
      <Modal OnClose={props.OnClose}>
        <ul className="flex flex-col divide-y divide-gray-200">
          {cartItems.map((items) => (
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
                      <p className="text-sm text-black">x1</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-black ">
                        {items.price}
                      </p>
                      <button
                        type="button"
                        className="rounded-full border bg-blue-900 mt-3 px-2 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        
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

        <div className="space-y-1 text-right text-black pb-5">
          <p>
            Total Price:
            <span className="font-semibold"> ₹0</span>
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
