import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Signup from "./Signup";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Payment from "./Payment";
import Contactus from "../pages/Contactus";
import Login from "./Login";

import AddProduct from "./Addproduct";
import Farmersdasboard from "./Farmersdashboard";
import Stock from "./Stock";
import Order from "./Orders";
import Update from "./Update";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/cart" element={< Cart/>}/> */}

        <Route path="contactus" element={<Contactus />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Payment />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/dashboard" element={<Farmersdasboard />} />
        <Route path="/update" element={<Update/>} />

        
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
