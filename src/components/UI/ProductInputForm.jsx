const ProductInputForm = function(props){
    return(
        <div  className="flex flex-row mb-0.5">
        <label className=" text-sm mr-4 text-white"  >{props.label} : </label>
        <input className="  w-8 border-1 border-solid border-gray-300 rounded px-1 font-inherit" {...props.input}    />
        </div>
        
        )
    
}

export default ProductInputForm

