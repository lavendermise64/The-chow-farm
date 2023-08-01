import order from "../assets/images/order.png";
import Nav from "./Nav";
import { useState } from "react";
function Orderpage() {
    const [formData, setformData] = useState({});
    const [formErrors,setFormErrors]=useState({});
    const [currentUser,setcurrentUser]=useState()
    function handleChange(e) {
      setformData({ ...formData, [e.target.name]: e.target.value })
    };
    function Order(e) {
        const errors= {};
        (formData.Name=== undefined || formData.firstName==="") && (errors.Name="please enter your first name");
        (formData.Name=== undefined || formData.lastName==="") && (errors.Name="please enter your email");
        (formData.email=== undefined || formData.email==="") && (errors.email="please enter your email");
      (formData.message=== undefined || formData.message==="") && (errors.message="please enter your message");
        setFormErrors(errors)
        console.log(errors)
       e.preventDefault();
       console.log(formData)
      }
  return (
    <div>
      <Nav />
      <div>
        <h2 className="text-center text-[2rem] font-bold">Order Food Crops</h2>
        <div className=" bg-[url('assets/images/order.png')] bg-no-repeat bg-right-top bg-cover h-[70vh] w-[100%]">
          <div className="container mx-auto translate-x-64 translate-y-64">
          {formErrors.Name && <p className="text-red-500">{formErrors.Name}</p>}
            <input
            onChange={(e) => Order(e)}
              type="text"
              placeholder="First Name"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500 my-4"
              name="firstName"
            />
            {formErrors.Name && <p className="text-red-500">{formErrors.Name}</p>}
            <input
            onChange={(e) => Order(e)}
              type="text"
              placeholder="Last Name"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500 my-4"
              name="lastname"
            />
            <input
              type="text"
              placeholder="EmailAddres"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500 my-4"
              name="emailAddres"
            />

            <input
              type="text"
              placeholder="Crop Quantity"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500 my-4"
              name="cropquantity"
            />
            <input
              type="text"
              placeholder="Pnone Number"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500"
              name="pnonenumber"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-[40%] mx-6 outline-none contain border-2 p-5 border-green-500 my-4"
              name="location"
            />
            <div className="py-2 px-1 rounded-md border-2  text-white shadow text-center bg-green-500  mx-auto w-[15%] my-4"  onClick={(e) => Order(e)}>
            <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Orderpage;
