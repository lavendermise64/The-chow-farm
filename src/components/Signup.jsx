// import google from "../assets/images/google.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import login from "../assets/images/login.png";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [currentUser, setcurrentUser] = useState();
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSignUp(e) {
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "please enter your last name");
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "please enter your email");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "please enter your phone number");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "please enter your password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "please enter your confirm password");
    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <Nav />
      <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0.5)),url('assets/images/login.png')] bg-no-repeat bg-right-top bg-cover h-[100vh] w-[100%]">
        <div className="pt-[4em]">
          <h1 className="text-5xl font-bold text-center text-white mb-4">
            Create An Account
          </h1>

          <div className="container mx-auto">
            <div className="flex container text-center">
              <div className="w-[50%] mx-auto">
                {formErrors.lastName && (
                  <p className="text-red-500 text-center">
                    {formErrors.lastName}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Last Name"
                  className="w-[100%] outline-none rounded-md border-2 p-5 my-5 border-green-500"
                  name="lastName"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-center">{formErrors.email}</p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Email Address"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-5 border-green-500"
                  name="email"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500 text-center">
                    {formErrors.phoneNumber}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="number"
                  placeholder="Phone Number"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-5 border-green-500"
                  name="phoneNumber"
                />
                {formErrors.password && (
                  <p className="text-red-500 text-center">
                    {formErrors.password}
                  </p>
                )}
                <div>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="outline-none rounded-md border-2 p-5 w-[100%] my-5 border-green-500"
                  />
                </div>

                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-center">
                    {formErrors.confirmPassword}
                  </p>
                )}
                <div>
                  <input
                    onChange={(e) => handleChange(e)}
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="outline-none rounded-md border-2 p-5 w-[100%] my-5 border-green-500"
                  />
                </div>
                <button
                  className="rounded-full text-white text-2xl font-bold w-[50%] my-16 bg-green-500 p-5 "
                  onClick={(e) => handleSignUp(e)}
                >
                  Create Account
                </button>
                <div className="flex justify-center gap-3">
                  <p className="text-2xl text-white">
                    Already Have An Account?
                  </p>
                <Link to= "/login"><button className="text-2xl text-green-500">Log In</button></Link>
                </div>
              </div>
            </div>
            <div className="w-[100%]">
              <div className="flex-1">{/* <img src={login} alt="" /> */}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
