import { Fragment } from "react"
import CasualCategory from "./ProductCategories/SportsCategory"
import SportsCategory from "./ProductCategories/CasualCategory"


const Products= function(){

    return(
        <Fragment>
       <CasualCategory />
       <SportsCategory />
        </Fragment>
    )
}


export default  Products