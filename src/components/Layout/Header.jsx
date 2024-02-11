import { Fragment } from 'react'
import HeaderCart from '../Cart/HeaderCart'


const Header= function(props){
    return(
        <Fragment>
      <div className=" fixed w-full h-30 bg-slate-700 ">
        <div className="mx-auto flex w-full h-30 items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="80" viewBox="0 0 50 50">
            <path d="M47.819 32.652L33.02 6.535C32.133 4.972 30.466 4 28.669 4H20c-.357 0-.687.19-.865.499-.179.31-.18.69-.002.999l23 40C42.312 45.81 42.643 46 43 46c.01 0 .02 0 .029 0 .368-.011.7-.224.865-.553l4.047-8.094C48.688 35.861 48.642 34.104 47.819 32.652zM27.84 28.457l-11-17C16.655 11.172 16.339 11 16 11c-.007 0-.014 0-.021 0-.347.008-.665.194-.841.493l-10 17c-.182.309-.184.692-.006 1.003C5.31 29.808 5.642 30 6 30h21c.366 0 .703-.2.879-.522C28.054 29.156 28.039 28.765 27.84 28.457zM36.874 44.515l-5-9C31.698 35.197 31.363 35 31 35H3c-.354 0-.683.188-.862.493-.18.305-.184.683-.012.992l5 9C7.302 45.803 7.637 46 8 46h28c.354 0 .683-.188.862-.493C37.042 45.202 37.046 44.824 36.874 44.515z"></path>
            </svg>
            </span>
            <span className=" font-protest-g subpixel-antialiased  text-white text-4xl px-5 font-extrabold shadow-xl shadow-black rounded-lg ">
            AthleticKicks
            
            </span>
            <div className="hidden grow items-start lg:flex">
            <ul className="ml-24 inline-flex space-x-11 mr-44">
              <li>
                <a
                  href="#"
                  className=" font-protest-r text-xl font-bold text-slate-900 hover:text-white"
                >
                  Home
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="font-protest-r  text-xl font-bold text-slate-900 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-protest-r text-xl font-bold text-slate-900 hover:text-white"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" font-protest-r text-xl font-bold text-slate-900 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
         
          </div>
          <div className=" flex justify-around  ml-96 ">
   
<button
          type="button"
          className="  rounded-full bg-slate-800 px-6 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        
        >
        Login
        </button>

</div>
          <HeaderCart onShowCart={props.onShow}  />
        </div>
      </div>
    </Fragment>

        )
}


export default  Header






