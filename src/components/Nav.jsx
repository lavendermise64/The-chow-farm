import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { StateContext } from "../context/stateContext";

function Nav() {
  const { cart, setCart } = useContext(StateContext);
  useEffect(() => {
    const NavCartItems = JSON.parse(localStorage.getItem("cart"));
    NavCartItems && setCart(NavCartItems);
    // cartItems && setCount(cartItems);
    // setQuantiy(1)
  }, []);
  return (
    <div className="">
      <div className=" container mx-auto flex justify-between items-center capitalize py-3">
        <div>
          <ul className="ul flex justify-between gap-2 items-center py-1">
            <Link to="/">
              <img src={logo} alt="chow farm  logo " width={60} />
            </Link>
            <Link to="/">
              <li> Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="ul flex justify-between gap-5 items-center py-4">
            <Link to="/signup">
              <li>Sign-Up</li>
            </Link>
            <Link to="/contactus">
              <li>Contact-Us</li>
            </Link>
            <Link to="/Login">
              <li>Login</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <div className="relative">
              <Link to="/cart">
            <li >
              <AiOutlineShoppingCart size={30} />
            </li>
            </Link>
            <div className="bottom-[1em] left-[1em] bg-green-500 border-2 black w-[26px] flex items-center justify-center h-[26px] rounded-full absolute">
              {cart.length}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
