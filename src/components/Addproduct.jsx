import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import login from "../assets/images/login.png";
import sinup from "../assets/images/sinup.jpeg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadString } from "firebase/storage";
import { storage } from "../firebase";

function AddProduct() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [addProductsErrors, setAddProductsErrors] = useState("");
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleAddProduct(e) {
    const errors = {};
    (formData.productsName === undefined || formData.productsName === "") &&
      (errors.productsName = "please enter your products name");
    (formData.productsDescription === undefined ||
      formData.productsDescription === "") &&
      (errors.productsDescription = "please enter your products description");
    (formData.productsPrice === undefined || formData.productsPrice === "") &&
      (errors.productsPrice = "please enter your products price");
    (formData.productsImage === undefined || formData.productsImage === "") &&
      (errors.productsImage = "please choose your products file");

    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);

    
  }

  function handleImageUpload(e) {
    try {
      const file = e.target.files[0];
      const storageRef = ref(storage, `products/${file.name}`);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result);
        uploadString(storageRef, fileReader.result, "data_url").then(
          (snapshot) => {
            console.log("Uploaded a data_url string!");
            const url = `https://firebasestorage.googleapis.com/v0/b/chow-farm.appspot.com/o/products%2F${file.name}?alt=media`
            setformData({...formData, productImg:url})
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
                  name="productsName"
                  value={formData.productsName}
                />

                {formErrors.productsDescription && (
                  <p className="text-red-500 text-center">
                    {formErrors.productsDescription}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Product's description"
                  className="w-[100%] outline-none rounded-md border-2 p-5 my-3"
                  name="productsDescription"
                  value={formData.productsDescription}
                />
                {formErrors.productsPrice && (
                  <p className="text-red-500 text-center">
                    {formErrors.productsPrice}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="productsPrice"
                  placeholder="Product's price"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="productsPrice"
                  value={formData.productsPrice}
                />
                {formErrors.productsImage && (
                  <p className="text-red-500 text-center">
                    {formErrors.productsImage}
                  </p>
                )}
                <input
                  type="file"
                  placeholder="Product's image"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="productsImage"
                  onChange={(e) => handleImageUpload(e)}
                />

                <Link to="/dashboard">
                  <button
                    className="rounded-md text-white text-2xl font-bold w-[100%] my-10 bg-green-500 p-5 items-center "
                    onClick={(e) => handleAddProduct(e)}
                  >
                    Add Product
                  </button>
                </Link>
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
