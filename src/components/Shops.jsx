import { useContext, useEffect, useState } from "react";
import { products } from "../data";
import { StateContext } from "../context/stateContext";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
const Shops = () => {
  const { cart, setCart } = useContext(StateContext);
  const { count, setCount } = useContext(StateContext);
  const [products, setProducts] = useState();
  const[loading,setLoading]=useState(false)

  function addToCart(e, product) {
    if (e.target.textContent.toLowerCase() === "add to cart") {
      cart && setCart((prev) => [...prev, product]);
      count && setCount((prev) => [...prev, product]);
      e.target.textContent = "Added to Cart";
      e.currentTarget.disabled = true;

      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      localStorage.setItem("count", JSON.stringify([...count, product]));
    }
  }
  useEffect(() => {
    const url = "https://chowfarm-api.onrender.com/api/posts/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2  container mx-auto mt-12 ">
      {loading && <Loader />}
      {products &&
        products.map((item) => {
          return (
            <div className="h-50 w-50 border-2 items-center py-1 px-2 rounded-md mb-8">
              <div className="h-[200px]">
                <img
                  src={`${item.productImg}`}
                  alt="product image"
                  className="h-[100%] w-[100%]  object-contain"
                />
              </div>

              <h4 className="text-center text-2xl ">{item.productName}</h4>
              <p className="text-center text-2xl text-green-500 ">
                {`Ksh.${item.productPrice}`}
              </p>
              {/* <p className="text-center text-2xl  "> {item.quantity}</p> */}
              <div className="flex justify-center gap-2 mt-1">
                <button
                  onClick={(e) => addToCart(e, item)}
                  className=" border-gray py-2 bg-green-500 rounded-md w-[50%] font-bold "
                >
                  Add to cart
                </button>
                <Link to={`product/${item._id}`}>
                  <button className=" border-gray  text-white bg-gray-700 rounded-md w-50 py-2 px-2 font-bold ">
                    View product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shops;
