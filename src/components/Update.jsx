import { useContext, useEffect, useState } from "react";
import loader from "../assets/images/loader.gif";
import { StateContext } from "../context/stateContext";
import Loader from "./Loader";
function Update() {
  const [imgUrl, setImgUrl] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [addProductsErrors, setAddProductsErrors] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setformData] = useState();
  const { showModal, setShowModal } = useContext(StateContext);
  const { selectedProduct, setSelectedProduct } = useContext(StateContext);
  const [loading, setLoading] = useState(false);

  // updating a product
  const updateProduct = () => {
    const url = `https://chowfarm-api.onrender.com/api/posts/update/${selectedProduct.id}`;
    setLoading(true);
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  const handleCancel = () => {
    setShowModal(false);
  };
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
  }

  return (
    <>
      <div className="w-[50%] left-[50%] z-30 translate-x-[-50%] absolute bg-white p-5 border ">
        {loading && <Loader />}
        {console.log(user._id)}
        <div
          className="w-[20px] h-[20px] rounded-full bg-gray-700 text-white flex justify-center items-center absolute top-3 right-3 cursor-pointer
        "
          onClick={handleCancel}
        >
          x
        </div>
        <div className="">
          <h1 className="text-2xl text-green-500 text-center mb-4">
            Edit a Product
          </h1>
          {addProductsErrors !== "" && (
            <p className="text-red-500 capitalize text-center">
              {addProductsErrors}
            </p>
          )}

          <div className="container mx-auto">
            {console.log(selectedProduct)}
            <div className="flex  text-center justify-between">
              <div className="">
                {formErrors.productsDescription && (
                  <p className="text-red-500 text-center">
                    {formErrors.productsName}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  defaultValue={selectedProduct.productName}
                  type="text"
                  placeholder="Product's name"
                  className="w-[100%] outline-none rounded-md  border-2 p-2 my-3 "
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
                  defaultValue={selectedProduct.productDescription}
                  type="text"
                  placeholder="Product's description"
                  className="w-[100%] outline-none rounded-md border-2 p-2 my-3"
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
                  defaultValue={selectedProduct.productPrice}
                  type="productPrice"
                  placeholder="Product's price"
                  className="outline-none rounded-md border-2 p-2 w-[100%] my-3"
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
                  defaultValue={selectedProduct.stock}
                  type="number"
                  placeholder="Number of products"
                  className="w-[100%] outline-none rounded-md  border-2 p-2 my-3 "
                  name="stock"
                  value={formData && formData.stock}
                />

                <input
                  type="file"
                  placeholder="Product's image"
                  className="outline-none rounded-md border-2 p-2 w-[100%] my-3"
                  name="productImg"
                  onChange={(e) => handleUpdate(e)}
                />
                <img src={selectedProduct.productImg} className="w-[150px]" />
                {/* <div>
                  {loading && <img src={loader} />}
                  {imgUrl && <img src={imgUrl} alt="" />}
                </div> */}
                <div className="flex  gap-9 justify-center items-center">
                  <button
                    className="rounded-md text-white text-2xl font-bold w-[20%]  bg-green-500 p-2 items-center "
                    onClick={updateProduct}
                  >
                    Update
                  </button>
                  <button
                    onClick={handleCancel}
                    className="rounded-md text-white text-2xl font-bold w-[20%]  bg-gray-700 p-2 items-center "
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Update;
