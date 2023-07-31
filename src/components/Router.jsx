import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "./Signup";
import Contactus from "./Contactuspage";

function Router(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop/>} />
    {/* <Route path="/about" element={<About-Us/>}/>
    
    <Route path="/order" element={<Order/>}/>
    <Route path="/cart" element={< Cart/>}/> */}
    <Route path="contactus" element={<Contactus/>}/>
<Route path="/signup" element={< Signup/>}/>

    </Routes>
    </BrowserRouter>
    )
}
export default Router;