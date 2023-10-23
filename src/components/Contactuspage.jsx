import Nav from "./Nav";
import Footer from "./Footer";
import kibo from "../assets/images/kibo.png";
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
      <h2 className="text-5xl text-center font-bold my-3">Reach Us Through</h2>
      <div className="flex">
        <div className="flex-1 container w[100%] my-7">
          <div>
          {formErrors.Name && <p className="text-red-500 text-center">{formErrors.Name}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter your name"
              className=" w-[95%]   mx-6   outline-none contain rounded-md  border-2   p-5  my-1"
              type="text"
              name="Name"
            />
          </div>
          <div>
          {formErrors.email && <p className="text-red-500 text-center">{formErrors.email}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter your email"
              className="w-[95%] mx-6 outline-none contain border-2 rounded-md p-5 my-2"
              type="email"
            />
          </div>
          <div>
          {formErrors.subject && <p className="text-red-500 text-center">{formErrors.subject}</p>}
            <input
            onChange={(e) => handleChange(e)}
              placeholder="Enter the subject"
              className="w-[95%] mx-6 outline-none contain border-2  p-5 rounded-md my-2"
              type="text"
            />
          </div>
          <div>
          {formErrors.message && <p className="text-red-500 text-center ">{formErrors.message}</p>}
            <textarea
            onChange={(e) => handleChange(e)}
              placeholder="Message"
              className="w-[95%] mx-6 outline-none contain border-2  p-5 my-2"
              rows="15"
              cols="5"
            ></textarea>
          </div>
          <div>
            <div className="">
          <button className="py-5 my-2 px-9 rounded-md border-2 border-grey  text-white shadow-1md text-center bg-green-500 block mx-auto text-2xl w-[95%]"  onClick={(e) => Contactuspage(e)}>
         
              Submit
            </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[url('assets/images/cont.jpeg')] w-[100%] h-[90vh] bg-no-repeat  bg-cover  "></div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}
export default Contactuspage;
