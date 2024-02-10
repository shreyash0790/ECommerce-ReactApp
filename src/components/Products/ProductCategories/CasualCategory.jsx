import aCasual from '../../../assets/ShoeImg/aCasual.png'
import nCasual from '../../../assets/ShoeImg/nCasual.jpg'
import nJordan from '../../../assets/ShoeImg/nJordan.jpg'
import pCasual from '../../../assets/ShoeImg/pCasual.jpg'



const casualShoesList=[
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
      {
        id: 3,
        name: "Puma-bold",
        description: "For those who are bold",
        price: "₹4000",
        imageSrc: pCasual,
      },
      {
        id: 4,
        name: "Nike-Jordans",
        description: "To jump the world with",
        price: "₹12000",
        imageSrc: nJordan,
      },
 ]



const CasualCategory= function(){





    return (
        <div>
        <div className="flex justify-center">
        <h1 className=" font-protest text-black text-4xl font-bold shadow-xl px-2 shadow-black rounded-lg ">CASUAL WEAR</h1>
        </div>
        <div className=" rounded-md  mx-auto grid w-full max-w-7xl items-center space-y-4 px-8 py-11 pb-10  my-24 mb-44  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
       
          {casualShoesList.map((items) => (
            <div key={items.id} className="rounded-lg border  border-black shadow  shadow-black ">
           
              <img
                src={items.imageSrc}
                alt="Laptop"
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <h1 className=" font-protest-r inline-flex items-center text-lg font-semibold">{items.name}</h1>
                <p className="mt-3 text-sm font-semibold text-slate-950">
                {items.description}
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
                <div className="mt-3 flex items-center space-x-2">
                  <span className=" text-black block text-sm font-bold">Price : {items.price} </span>
                
                </div>
                <div className="mt-5 flex items-center space-x-2">
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
                <button
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      )
}


export default  CasualCategory