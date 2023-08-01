import { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StateContext } from "../context/stateContext";
function Cart() {
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    cartItems && setCart(cartItems);
  }, []);

  const { cart, setCart } = useContext(StateContext);

  return (
    <>
      <Nav />
      <h1 className="text-center text-green-500 text-5xl">YOUR BASKET</h1>
      {cart.map((item) => {
        return (
          <div className="border-2 flex">
            <div className="flex">
              <img src={`src/assets/images/${item.img}`} />
              <p>{item.name}</p>
              <p>{` Ksh.${item.price}`}</p>
              <div className="text-3xl font-bold  border-gray-500 p-5 text-center flex bg-green-500 justify-between w-[50%] h-[50%]">
                <p>-</p>
                <p>0</p>
                <p>+</p>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
}
export default Cart;
