import Nav from "./Nav";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { StateContext } from "../context/stateContext";
function SingleProduct() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useContext(StateContext);
  const { count, setCount } = useContext(StateContext);

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
    // Fetch single product
    const url = `https://chowfarm-api.onrender.com/api/posts/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Fetch users
    setLoading(true);
    const userUrl = "https://chowfarm-api.onrender.com/api/auth/";
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) => {
        product &&
          data.find((item) => {
            if (item._id === product.uid) {
              setFarmer(item);
              console.log(item);
            }
          });
        setLoading(false);
      });
  }, [product]);

  return (
    <div className="flex flex-col justify-between h-[100vh] ">
      <Nav />
      {loading && <Loader />}
      {loading === false && (
        <div className="flex  flex-1 gap-2 container mx-auto">
          <div className="flex align-bottom border-2 w-[50%] rounded-md mb-2">
            <div className="">
              <img src={product && product.productImg} alt="" />
            </div>
            <div className="items-center mt-12">
              <p className="text-2xl text-green-600">
                {product && product.productName}
              </p>
              <p className="text-0.5xl text-gray-700">
                {product && product.productDescription}
              </p>
              <p className="text-2xl text-purple-900">{`Ksh. ${
                product && parseInt(product.productPrice).toLocaleString()
              }`}</p>

              <button
                onClick={(e) => addToCart(e, product)}
                className=" border-gray py-2 bg-green-500 rounded-md w-50 p-2 font-bold "
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className=" border-2 w-[50%] rounded-md mb-2 p-2 items-center ">
            <div className="items-center mt-10">
              <h2 className="text-center  text-3xl mb-1 font-bold">Farmer</h2>
              <p className="text-center text-green-600">
                {farmer && farmer.firstName}
              </p>
              <p className="text-center text-purple-900">
                {farmer && farmer.emailAddress}
              </p>
              <p className="text-center">{farmer && farmer.phoneNumber}</p>
            </div>
          </div>
        </div>
      )}{" "}
      <Footer />
    </div>
  );
}
export default SingleProduct;
