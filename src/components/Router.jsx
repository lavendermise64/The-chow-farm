import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

import Signup from "./Signup";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Orderpage from "./Orderpage";
import Payment from "./Payment";
import Contactus from "../pages/Contactus";
import Login from "./Login";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/order" element={<Order/>}/> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/cart" element={< Cart/>}/> */} development
        <Route path="contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
