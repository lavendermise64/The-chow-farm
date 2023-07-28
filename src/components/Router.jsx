import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

function Router(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop/>} />
    {/* <Route path="/about" element={<About-Us/>}/>
    <Route path="/contact" element={<Contact-Us/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/cart" element={< Cart/>}/> */}


    </Routes>
    </BrowserRouter>
    )
}
export default Router;