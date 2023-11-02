import Nav from "./Nav";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function SingleProduct() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState(null);
  const [product, setProduct] = useState(null);
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

    // Fetch users
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
      });
  }, []);

  return (
    <div className="w-[100%]">
      <Nav />
      <div className="flex  flex-1 gap-2 container mx-auto" >
      <div className="flex align-bottom border-2 w-[50%] rounded-md mb-2">
        <div className="">
          <img src={product && product.productImg} alt="" />
        </div>
        <div className="items-center mt-12">
          <p className="text-2xl text-green-600">{product && product.productName}</p>
          <p className="text-0.5xl text-gray-700">{product && product.productDescription}</p>
          <p className="text-2xl text-purple-900">{product && product.productPrice}</p>

          <button
            
            className=" border-gray  bg-green-500 rounded-md mt-4 w-50 p-2 font-bold cursor-pointer "
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className=" border-2 w-[50%] rounded-md mb-2 p-2 items-center ">
        <div className="items-center mt-10">
        <h2 className="text-center  text-3xl mb-1 font-bold">Farmer</h2>
        <p className="text-center text-green-600">{farmer && farmer.firstName}</p>
        <p className="text-center text-purple-900">{farmer && farmer.emailAddress}</p>
        <p className="text-center">{farmer && farmer.phoneNumber}</p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
export default SingleProduct;
