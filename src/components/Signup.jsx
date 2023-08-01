// import google from "../assets/images/google.png";
import Nav from "./Nav";
import { useState } from "react";
import signup from "../assets/images/signup.png"
function Signup(){
  const [formData, setformData] = useState({});
  const [formErrors,setFormErrors]=useState({});
  const [currentUser,setcurrentUser]=useState()
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value })
  };
  function handleSignUp(e) {
    const errors= {};
    (formData.firstName=== undefined || formData.firstName==="") && (errors.firstName="please enter your first name");
    (formData.lastName=== undefined || formData.lastName==="") && (errors.lastName="please enter your last name");
    (formData.email=== undefined || formData.email==="") && (errors.email="please enter your email");
    (formData.phoneNumber=== undefined || formData.phoneNumber==="") && (errors.phoneNumber="please enter your phone number");
    (formData.password=== undefined || formData.password==="") && (errors.password="please enter your password");
    (formData.confirmPassword=== undefined || formData.confirmPassword==="") && (errors.confirmPassword="please enter your confirm password")
    setFormErrors(errors)
     console.log(errors)
    e.preventDefault();
    console.log(formData)
  }
    return(
        <div className="">
          <Nav/>
          {/* <div className=" bg-[url('assets/images/signup.png')] bg-no-repeat bg-right-top bg-cover h-[70vh]"></div> */}
<h1 className="text-4xl font-bold text-center">Create An Account</h1>
{formErrors.firstName && <p className="text-red-500 text-center">{formErrors.firstName}</p>}
<div className="flex container">
<div className="w-[100%]">
<input
 onChange={(e) => handleChange(e)}
    
              type="text"
              placeholder="First Name"
              className="w-[100%] mx-6 outline-none rounded-full border-2 p-5 border-green-500"
              name="firstName"
              
              />
              {formErrors.lastName && <p className="text-red-500 text-center">{formErrors.lastName}</p>}
                <input
            onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Last Name"
              className="w-[100%] outline-none rounded-full border-2 p-5 my-5 border-green-500"
              name="lastName"
            />
            {formErrors.email && <p className="text-red-500 text-center">{formErrors.email}</p>}
             <input
             onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Email Address"
              className="outline-none rounded-full border-2 p-5 w-[100%] my-5 border-green-500"
              name="emailAddress"
            />
            {formErrors.phoneNumber && <p className="text-red-500 text-center">{formErrors.phoneNumber}</p>}
             <input
    onChange={(e) => handleChange(e)}
              type="number"
              placeholder="Phone Number"
              className="outline-none rounded-full border-2 p-5 w-[100%] my-5 border-green-500"
              name="phoneNumber"
            />
                {formErrors.password && <p className="text-red-500 text-center">{formErrors.password}</p>}
            <div className="outline-none rounded-full border-2 p-5 w-[100%] my-5 flex justify-between border-green-500">
             <input
            onChange={(e) => handleChange(e)}
    
                placeholder="Password"
                name="password"
              />
              </div>
              {formErrors.confirmPassword && <p className="text-red-500 text-center">{formErrors.confirmPassword}</p>}
              <div className="outline-none rounded-full border-2 p-5 w-[100%] my-5 flex justify-between border-green-500">
              <input
                  onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
              </div>
              <div className=" "></div>
              <button
              className="text-white text-2xl font-bold w-[100%] justify-center flex my-16 bg-green-500 p-5 rounded-full"
              onClick={(e) => handleSignUp(e)}
            >
              Create Account
            </button>
            {/* <button  className=" text-2xl font-bold text-blue-600 my-4">
      
      Sign In With Google
    </button> */}
    <div className="flex justify-center w-[70%] gap-3">
            <p className="text-2xl">Already Have An Account?</p>
            <button className="text-black text-2xl">Log In</button>
          </div>
          </div>
          <div className="w-[100%]">
          <div className="flex-1">
          <img src={signup} alt="" />
        </div>
        </div>
        </div>
        </div>
    )
}
export default Signup;