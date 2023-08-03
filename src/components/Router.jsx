import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

import Shops from "./Shops";

import Signup from "./Signup";
import Contactus from "./Contactuspage";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Payment from "./Payment";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart/>} />
      

        <Route path="contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
