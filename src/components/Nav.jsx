import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/stateContext";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(StateContext);
  const { currentUser, setCurrentUser } = useContext(StateContext);
  useEffect(() => {
    const navCartItems = JSON.parse(localStorage.getItem("cart"));
    navCartItems && setCart(navCartItems);

    //Set current user
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
    console.log(navCartItems);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sticky top-0 bg-white">
      <div className=" w-[80%] m-[auto] lg:container lg:mx-auto flex justify-between items-center capitalize py-3">
        <div className="flex gap-5">
          <Link to="/">
            <img src={logo} alt="chow farm  logo " width={60} />
          </Link>
          <ul className="ul lg:flex justify-between gap-8 items-center py-1 hidden">
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
        <div className="flex gap-4  items-center">
          <ul className="ul lg:flex justify-between gap-8 items-center py-4 hidden">
            <Link to="/contactus">
              <li>Contact-Us</li>
            </Link>

            <div className="relative">
              <Link to="/cart">
                <span>
                  <AiOutlineShoppingCart size={30} />
                </span>
              </Link>
              <div className="bottom-[1em] left-[1em] bg-green-500 border-2 black w-[26px] flex items-center justify-center h-[26px] rounded-full absolute">
                {cart && cart.length}
              </div>
            </div>

            {currentUser && currentUser.isFarmer && (
              <div className="gap-12">
                <Link to="/addproduct">
                  <button className="border-2 py-2 px-4 bg-green-500 mx-5 text-white rounded-md">
                    Add-product
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="border-2 py-2 px-4 bg-green-500 text-white rounded-md">
                    Go to dashboard
                  </button>
                </Link>
              </div>
            )}

            {currentUser ? (
              <button
                className="border-2 py-2 px-4 bg-green-500 text-white rounded-md"
                onClick={handleLogout}
              >
                Log Out
              </button>
            ) : (
              <Link to="/Login">
                <li>Login</li>
              </Link>
            )}

            {!currentUser && (
              <Link to="/signup">
                <li>Sign-Up</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
