import Nav from "./Nav";
import Footer from "./Footer";
import contact from "../assets/images/contact.svg";
import { useState } from "react";
function Contactuspage() {
  const [formData, setformData] = useState({});
  const [formErrors,setFormErrors]=useState({});
  const [currentUser,setcurrentUser]=useState()
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value })
  };
  function Contactuspage(e) {
    const errors= {};
    (formData.Name=== undefined || formData.firstName==="") && (errors.Name="please enter your first name");
    (formData.email=== undefined || formData.email==="") && (errors.email="please enter your email");
    (formData.subject=== undefined || formData.subject==="") && (errors.subject="please enter your subject");
  (formData.message=== undefined || formData.message==="") && (errors.message="please enter your message");
    setFormErrors(errors)
    console.log(errors)
   e.preventDefault();
   console.log(formData)
  }
  return (
    <div className="">
      {/* <Nav /> */}
      <h2 className="text-5xl text-center font-bold">Reach Us Through</h2>
      <div className="flex">
        <div className="flex-1 container w[100%] my-7">
          <div>
          {formErrors.Name && <p className="text-red-500">{formErrors.Name}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
              className="w-[100%] mx-6 outline-none contain border-2 border-green-500 p-5 my-1"
              type="text"
              name="Name"
            />
          </div>
          <div>
          {formErrors.email && <p className="text-red-500">{formErrors.email}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
              className="w-[100%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              type="email"
            />
          </div>
          <div>
          {formErrors.subject && <p className="text-red-500">{formErrors.subject}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter the subject"
              className="w-[100%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              type="text"
            />
          </div>
          <div>
          {formErrors.message && <p className="text-red-500">{formErrors.message}</p>}
            <textarea
            onChange={(e) => handleChange(e)}
              placeholder="Message"
              className="w-[100%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              rows="15"
              cols="5"
            ></textarea>
          </div>
          <div>
            <div className="">
          <button className="py-2 px-9 rounded-full border-2 border-grey  border-green-500 text-white shadow-1md text-center bg-green-500 block mx-auto"  onClick={(e) => Contactuspage(e)}>
         
              Submit
            </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[url('assets/images/contact.svg')] bg-no-repeat bg-right-top bg-contain"></div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default Contactuspage;
