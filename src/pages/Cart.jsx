import { useContext, useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StateContext } from "../context/stateContext";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, setCart } = useContext(StateContext);
  const [count, setCount] = useState(() => {
    return JSON.parse(localStorage.getItem("count"))
      ? JSON.parse(localStorage.getItem("count"))
      : JSON.parse(localStorage.getItem("cart"));
  });
  useEffect(() => {
    const countItems = JSON.parse(localStorage.getItem("count"));
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    console.log(countItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

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
    <div>
      {cart.length !== 0 ? (
        <div>
          <Nav />
          <div className="container mx-auto">
            <h1 className="text-center text-green-500  text-5xl">
              YOUR BASKET
            </h1>
            <div className="flex">
              <div className="w-[70%]">
                <div className="border-b-2 flex justify-between font-bold text-gray-600">
                  <h2></h2>
                  <h2>Product</h2>
                  <h2>Quantity(in Kgs)</h2>
                  <h2>Price</h2>
                </div>
                {cart.map((item) => {
                  return (
                    <div className="flex items-center justify-between border-b-[1px] py-3">
                      <div className="w-[25%]">
                        <img src={`src/assets/images/${item.img}`} />
                      </div>
                      <div className="flex justify-center w-[25%]">
                        <h3 className="font-bold text-[1.2rem]">{item.name}</h3>
                      </div>
                      <div className="flex items-center w-[25%]  justify-end">
                        {/* <h4 className="">Qantity(In Kgs)</h4> */}
                        <div className="font-bold  border-gray-500  text-center w-[10vw] flex justify-center items-center gap-3 text-3xl">
                          <button
                            disabled={
                              count.filter((el) => el.name === item.name)
                                .length === 1
                            }
                            onClick={() => {
                              itemQuantity("subtract", item);
                            }}
                          >
                            <p className="">-</p>
                          </button>
                          <p>
                            {/* {count.length} */}
                            {count.filter((el) => el.name === item.name).length}
                          </p>

                          <button onClick={() => itemQuantity("add", item)}>
                            <p className="cursor-pointer">+</p>
                          </button>
                        </div>
                      </div>

                      <div className="w-[25%] text-right">
                        <p>{`Ksh. ${count
                          .filter((el) => el.name === item.name)
                          .reduce((acc, curr) => acc + curr.price, 0)
                          .toLocaleString()}`}</p>
                      </div>
                      <button className="bg-red-500 text-white rounded-full m-4 py-2 px-7">Delete</button>
                    </div>
                  );
                })}
              </div>
              <div className="w-[30%] fixed  top-15 right-[0]">
                <div className=" gap-2 border-2 w-[30vw] h-[30vh] bg-gray-200 text-2xl">
                  <h2 className="text-4xl text-center font-bold">Summary</h2>

                  <div className="">
                    <div className="flex gap-72 py-4">
                      <h4>Subtotal</h4>
                      <p>{`Ksh. ${count
                        .reduce((acc, curr) => acc + curr.price, 0)
                        .toLocaleString()}`}</p>
                    </div>

                    <div className="flex gap-72">
                      <h4>Total</h4>
                      <p className=" font-bold p-[1em]">{`Ksh. ${count
                        .reduce((acc, curr) => acc + curr.price, 0)
                        .toLocaleString()}`}</p>
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
