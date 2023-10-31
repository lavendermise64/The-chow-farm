import Nav from "./Nav";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import login from "../assets/images/login.png";
import sinup from "../assets/images/sinup.jpeg";
import loader from "../assets/images/loader.gif";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase";
import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebase";
import { StateContext } from "../context/stateContext";
function AddProduct() {
  // const { currentUser, setCurrentUser } = useContext(StateContext);
  const [imgUrl, setImgUrl] = useState("");
 
  const [formErrors, setFormErrors] = useState({});
  const [addProductsErrors, setAddProductsErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setformData] = useState();
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleAddProduct(e) {
    const errors = {};
    (formData.productName === undefined || formData.productName === "") &&
      (errors.productName = "please enter your product name");
    (formData.productDescription === undefined ||
      formData.productDescription === "") &&
      (errors.productDescription = "please enter your product description");
    (formData.productPrice === undefined || formData.productPrice === "") &&
      (errors.productPrice = "please enter your product price");
    (formData.productImg === undefined || formData.productImg === "") &&
      (errors.productImg = "please choose your products image");
    (formData.stock === undefined || formData.stock === "") &&
      (errors.stock = "please enter the number of products");
    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);

  
    // Add to Database

    const url = `https://chowfarm-api.onrender.com/api/posts/new/`;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({...formData, uid:user._id}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.productName) {
          setformData({
            productName: "",
            productImg: "",
            productPrice: "",
            stock: "",
          });
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleImageUpload(e) {
    try {
      setLoading(true);
      const file = e.target.files[0];
      const storageRef = ref(storage, `products/${file.name}`);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result);
        uploadString(storageRef, fileReader.result, "data_url").then(
          (snapshot) => {
            console.log("Uploaded a data_url string!");

            const url = `https://firebasestorage.googleapis.com/v0/b/chow-farm.appspot.com/o/products%2F${file.name}?alt=media`;
            setformData({ ...formData, productImg: url });
            setImgUrl(url);
            setLoading(false);
          }
        );
      };

      fileReader.readAsDataURL(file);

      // console.log(file);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Nav />
      <div className="gap-12">
      {console.log(user._id)}
        <div className="pt-[4em]">
          <h1 className="text-5xl font-bold text-center mb-4">Add a Product</h1>
          {addProductsErrors !== "" && (
            <p className="text-red-500 capitalize text-center">
              {addProductsErrors}
            </p>
          )}

        

          <div className="container mx-auto">
            <div className="flex  text-center justify-between">
              <div className="w-[50%]">
                {formErrors.productsDescription && (
                  <p className="text-red-500 text-center">
                    {formErrors.productsName}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Product's name"
                  className="w-[100%] outline-none rounded-md  border-2 p-5 my-3 "
                  name="productName"
                  value={formData && formData.productName}
                />

                {formErrors.productDescription && (
                  <p className="text-red-500 text-center">
                    {formErrors.productDescription}
                  </p>
                )}
                <textarea
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Product's description"
                  className="w-[100%] outline-none rounded-md border-2 p-5 my-3"
                  name="productDescription"
                  value={formData && formData.productDescription}
                />
                {formErrors.productPrice && (
                  <p className="text-red-500 text-center">
                    {formErrors.productPrice}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="productPrice"
                  placeholder="Product's price"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="productPrice"
                  value={formData && formData.productPrice}
                />
                {formErrors.productImg && (
                  <p className="text-red-500 text-center">
                    {formErrors.productImage}
                  </p>
                )}

                <input
                  onChange={(e) => handleChange(e)}
                  type="number"
                  placeholder="Number of products"
                  className="w-[100%] outline-none rounded-md  border-2 p-5 my-3 "
                  name="stock"
                  value={formData && formData.stock}
                />

                <input
                  type="file"
                  placeholder="Product's image"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="productImg"
                  onChange={(e) => handleImageUpload(e)}
                />
                <div>
                  {loading && <img src={loader} />}
                  {imgUrl && <img src={imgUrl} alt="" />}
                </div>

                <button
                  className="rounded-md text-white text-2xl font-bold w-[100%] my-10 bg-green-500 p-5 items-center "
                  onClick={(e) => handleAddProduct(e)}
                >
                  Add Product
                </button>
              </div>
              <div className="flex-1 bg-[url('assets/images/add.jpeg')] w-[100%] h-[60vh]  bg-no-repeat  bg-cover "></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddProduct;
