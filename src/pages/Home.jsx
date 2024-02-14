const HomePage = () => {
  return (
    <div className=" bg-home bg-center  object-fill h-screen w-full bottom-0   ">
      <div className="  flex justify-center h-full ">
        <div className="container  flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className=" flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className=" font-protest-g text-xl font-bold text-blue-800 uppercase shadow-lg shadow-black rounded-md px-4">
              Get - Set - Fit
            </span>
            <h1 className="mt-4 text-6xl font-bold leading-tight text-slate-900 sm:text-7xl">
              Let yourself be carried
              <br />
              by Kicks
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
