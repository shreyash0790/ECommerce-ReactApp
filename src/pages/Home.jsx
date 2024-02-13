import { Link } from "react-router-dom";




const HomePage = () => {
  return (
    <div className=" bg-home bg-center  object-fill h-screen w-full bottom-0   ">
        <div className="  flex justify-center h-full ">
       
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className=" font-protest-g text-xl font-bold text-blue-800 uppercase shadow-lg shadow-black rounded-md px-4">
                Get - Set - Fit
            </span>
            <h1 className="mt-4 text-6xl font-bold leading-tight text-slate-900 sm:text-7xl">
                Let yourself be carried
                <br/>
                    by  Kicks
            </h1>
            <Link to={"/store"} className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                Discover
            </Link>
            
        </div>
    </div>
        </div>
       
       
      </div>

  );
}

export default HomePage