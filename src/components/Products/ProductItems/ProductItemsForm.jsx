import CartContext from "../../Context/CartContext";
import { useContext } from "react";
import ProductInputForm from "../../UI/ProductInputForm";



const ProductItemsForm=function(props){
    const cartCnxt = useContext(CartContext);

    const addItemToCart = (event) => {
      event.preventDefault();
      const quantity = document.getElementById("amount_" + props.id).value;
      cartCnxt.addItems({ ...props.items, Quantity: quantity });
    };
  
    return (
      <form className="text-right ">
        <ProductInputForm
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button
          type="button"
          className=" mt-8 rounded-lg bg-blue-950 px-4 py-1 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={addItemToCart}
        >
         Add to Cart 
        </button>
      </form>
    );

}


export default ProductItemsForm



