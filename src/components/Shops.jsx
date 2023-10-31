import { useContext, useEffect, useState } from "react";
import { products } from "../data";
// import { addToCart } from "./Helpful";
import { StateContext } from "../context/stateContext";

const Shops = () => {
  const { cart, setCart } = useContext(StateContext);
  const[products,setProducts]=useState()

  function addToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      setCart((prev) => [...prev, product]);
      e.target.textContent = "Added to Cart";
      e.currentTarget.disabled = true;

      localStorage.                alt="product image"
      setItem("cart", JSON.stringify([...cart, product]));
    }
  }

  useEffect(() => {
      const url = "https://chowfarm-api.onrender.com/api/posts/";
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data);
      })
      .catch(err=>console.log(err))
    
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2  container mx-auto mt-12 ">
      {products && products.map((item) => {
        return (
          <div className="h-50 w-50 border-2 items-center rounded-md mb-8">
            <div className="h-[200px]">
              <img
                src={`${item.productImg}`}
                alt="product image"
                className="h-[100%] w-[100%]  object-contain"
              />
            </div>

            <h4 className="text-center text-2xl ">{item.productName}</h4>
            <p className="text-center text-2xl text-green-500 ">
              {" "}
              Ksh.{item.productPrice}
            </p>
            <p className="text-center text-2xl  "> {item.quantity}</p>
            <div className="flex justify-center">
              <button
                onClick={(e) => addToCart(e, item)}
                className=" border-gray p-5 bg-green-500 rounded-full w-52 font-bold m-[2em]"
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );           

};

export default Shops;
