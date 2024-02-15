import { Fragment } from "react";
import CasualCategory from "../ProductCategories/CasualCategory";
import SportsCategory from "../ProductCategories/SportsCategory";

import aCasual from "../../../assets/ShoeImg/aCasual.png";
import nCasual from "../../../assets/ShoeImg/nCasual.jpg";
import nJordan from "../../../assets/ShoeImg/nJordan.jpg";
import pCasual from "../../../assets/ShoeImg/pCasual.jpg";

import pSports from "../../../assets/ShoeImg/pSports.jpg";
import aSports from "../../../assets/ShoeImg/aSports.jpg";
import nSports from "../../../assets/ShoeImg/nSports.jpg";
import rSports from "../../../assets/ShoeImg/rSports.jpg";

const casualShoesList = [
  {
    id: 1,
    name: "NikeSneakers",
    description: "For Casual wear",
    price: "₹3300",
    imageSrc: nCasual,
  },
  {
    id: 2,
    name: "AdidasSuperstar",
    description: "To rock the party",
    price: "₹6000",
    imageSrc: aCasual,
  },
  {
    id: 3,
    name: "Pumabold",
    description: "For those who are bold",
    price: "₹4000",
    imageSrc: pCasual,
  },
  {
    id: 4,
    name: "NikeJordans",
    description: "To jump the world with",
    price: "₹12000",
    imageSrc: nJordan,
  },
];

const sportsShoesList = [
  {
    id: 5,
    name: "NikeAir",
    description: "Running Shoes",
    price: "₹2000",
    imageSrc: nSports,
  },
  {
    id: 6,
    name: "AdidasRacer",
    description: "Made for Athletes",
    price: "₹5000",
    imageSrc: aSports,
  },
  {
    id: 7,
    name: "PumaLite",
    description: "For daily running",
    price: "₹3500",
    imageSrc: pSports,
  },
  {
    id: 8,
    name: "Reebookfit",
    description: "To never get tired",
    price: "₹9000",
    imageSrc: rSports,
  },
];

const ProductItems = function () {
  return (
    <Fragment>
      <div>
        <div className="flex justify-center ">
          <h1 className=" font-protest text-black text-4xl font-bold shadow-xl px-2 shadow-black rounded-lg mt-44 ">
            CASUAL WEAR
          </h1>
        </div>
        <div className=" rounded-md  mx-auto grid w-full max-w-7xl items-center space-y-4 px-8 py-11 pb-10  my-24 mb-44  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
          {casualShoesList.map((items) => (
            <CasualCategory
              key={items.id}
              id={items.id}
              name={items.name}
              description={items.description}
              imageSrc={items.imageSrc}
              price={items.price}
              
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <h1 className=" font-protest text-black text-4xl font-bold shadow-xl px-2 shadow-black rounded-lg ">
            SPORTS WEAR
          </h1>
        </div>
        <div className=" rounded-md  mx-auto grid w-full max-w-7xl items-center space-y-4 px-8 py-11 pb-10  my-24 mb-44  md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4 ">
          {sportsShoesList.map((items) => (
            <SportsCategory
              key={items.id}
              id={items.id}
              name={items.name}
              description={items.description}
              imageSrc={items.imageSrc}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductItems;
