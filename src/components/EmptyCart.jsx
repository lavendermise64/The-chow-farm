import {BsFillCartXFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
function EmptyCart(){
    return(
        <div >
            <Nav/>
            <div className="flex justify-center gap-5">
            <h4 className="font-bold text-7xl">The cart is empty</h4>
            <BsFillCartXFill  size={100}/>
            </div>
            <div className="flex justify-center" >
              <Link to="/shop"><button className=" mt-10 border-gray p-5 bg-green-500 rounded-full w-52 ">SHOP NOW</button></Link>
            </div>
            <Footer/>
        </div>
        
    
    )
}
export default EmptyCart