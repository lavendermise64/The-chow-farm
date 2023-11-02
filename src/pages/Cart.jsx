import { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StateContext } from "../context/stateContext";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, setCart } = useContext(StateContext);
  const { count, setCount } = useContext(StateContext);

  console.log(cart);
  useEffect(() => {
    const countItems = JSON.parse(localStorage.getItem("count"));
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    setCart(() => {
      return JSON.parse(localStorage.getItem("count"))
        ? JSON.parse(localStorage.getItem("count"))
        : JSON.parse(localStorage.getItem("cart"));
    });

    console.log(countItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  function handleDelete(product) {
    // Delete from UI
    const items = [];
    cart &&
      cart.find((item) => {
        item !== product && items.push(item);
      });

    setCart(items);

    // Remove from local storage
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const countItems = JSON.parse(localStorage.getItem("count"));

    const cartProducts = [];
    cartItems &&
      cartItems.find((item) => {
        item._id !== product._id && cartProducts.push(item);
        console.log(item==product);
      });

    const countProducts = [];
    countItems &&
      countItems.find((item) => {
        item._id !== product._id && countProducts.push(item);
      });

    localStorage.setItem("cart", JSON.stringify(cartProducts));
    localStorage.setItem("count", JSON.stringify(countProducts));
    setCount(countProducts)

    console.log(cartProducts)
  }

  function itemQuantity(action, product) {
    if (action === "subtract") {
      const countArr = [...count];
      const itemIndex = countArr.indexOf(product);
      countArr.splice(itemIndex, 1);
      console.log(count);

      setCount(countArr);
    } else if (action === "add") {
      setCount((prev) => [...prev, product]);
      console.log(count);
    }
  }

  return (
    <div className="">
      {console.log(count)}
      {cart && cart.length !== 0 ? (
        <div>
          <Nav />
          <div className="">
            <h1 className="text-center text-green-500  text-5xl">
              YOUR BASKET
            </h1>
            <div className="flex">
              <div className="w-[70%]">
                <div className="border-b-2 flex gap-24 font-bold text-gray-600">
                  <h2>Product</h2>
                  <h2>Product name</h2>
                  <h2>Quantity(in Kgs)</h2>
                  <h2>Price</h2>
                </div>
                {cart.map((item) => {
                  console.log(item.productName);
                  return (
                    <div className="flex items-center justify-between border-b-[1px] py-3">
                      <div className="w-[6%]">
                        <img src={item.productImg} />
                      </div>
                      <div className="flex justify-center w-[20%]">
                        <h3 className="font-bold text-[1.2rem]">
                          {item.productName}
                        </h3>
                      </div>
                      <div className="flex items-center w-[20%]  justify-end">
                        <div className="font-bold  border-gray-500  text-center w-[10vw] flex justify-center items-center gap-3 text-3xl">
                          <button
                            disabled={
                              count &&
                              count.filter(
                                (el) => el.productName === item.productName
                              ).length === 1
                            }
                            onClick={() => {
                              itemQuantity("subtract", item);
                            }}
                          >
                            <p className="">-</p>
                          </button>
                          <p>
                            {count &&
                              count.filter(
                                (el) => el.productName === item.productName
                              ).length}
                          </p>

                          <button onClick={() => itemQuantity("add", item)}>
                            <p className="cursor-pointer">+</p>
                          </button>
                        </div>
                      </div>

                      <div className="w-[20%]">
                        <p>{`Ksh. ${
                          count &&
                          count
                            .filter((el) => el.productName === item.productName)
                            .reduce(
                              (acc, curr) => acc + Number(curr.productPrice),
                              0
                            )
                            .toLocaleString()
                        }`}</p>
                      </div>
                      <button
                        className="bg-red-500 text-white rounded-full  py-1 px-5"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="w-[30%] fixed  top-15 right-[0]">
                <div className=" gap-2 border-2 w-[40vw] h-[30vh] bg-gray-200 text-2xl">
                  <h2 className="text-4xl text-center font-bold">Summary</h2>
                  <div className="flex gap-12 container mx-auto justify-center">
                    <div className="flex gap-2">
                      <input type="radio" name="deliver" />
                      <p>Pick</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="deliver" />
                      <p>Deliver</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex gap-24 py-4">
                      <h4>Subtotal</h4>
                      <p>{`Ksh. ${
                        count &&
                        count
                          .reduce(
                            (acc, curr) => acc + Number(curr.productPrice),
                            0
                          )
                          .toLocaleString()
                      }`}</p>
                    </div>

                    <div className="flex gap-32">
                      <h4>Total</h4>
                      <p>{`Ksh. ${
                        count &&
                        count
                          .reduce(
                            (acc, curr) => acc + Number(curr.productPrice),
                            0
                          )
                          .toLocaleString()
                      }`}</p>
                    </div>
                  </div>
                  <div className="bg-green-500 p-[1em] w-[99%] h-[10vh] flex justify-center rounded-full font-bold text-center">
                    <Link to="/checkout">
                      <button className="">Checkout</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
export default Cart;
