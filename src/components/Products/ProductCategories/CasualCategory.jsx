import { NavLink } from "react-router-dom";
import ProductItemsForm from "../ProductItems/ProductItemsForm";

const CasualCategory = function (props) {
  
  return (
  
    <div
      key={props.id}
      className="rounded-lg border  border-black shadow  shadow-black "
    >
      <img
        src={props.imageSrc}
        alt="Laptop"
        className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
      />
      <div className="p-4">
      <NavLink to={`/store/${props.id}`} onClick={() => localStorage.setItem('productData', JSON.stringify(props))}>
      <h1 className=" font-protest-r inline-flex props-center text-xl font-bold shadow-md  text-black">
          {props.name}
        </h1>
      </NavLink>
        
        <p className="mt-3 text-sm font-semibold text-slate-950">
          {props.description}
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Sneakers
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Nike
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Airmax
          </span>
        </div>
        <div className="mt-3 flex props-center space-x-2">
          <span className=" text-white block text-lg font-bold">
            Price : {props.price}{" "}
          </span>
        </div>
        <div className="mt-5 flex props-center space-x-2">
          <span className="block text-sm font-semibold">Size : </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            8 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            9 UK
          </span>
          <span className="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
            10 UK
          </span>
        </div>
        <div className="ml-auto flex flex-col items-start justify-between mt-6">
         <ProductItemsForm items={props} id={props.id}/>
        
        </div>
       
      </div>
    </div>
  );
};

export default CasualCategory;
