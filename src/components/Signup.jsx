// import google from "../assets/images/google.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import login from "../assets/images/login.png";
import sinup from "../assets/images/sinup.jpeg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Loader from "./Loader";

function Signup() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [signupErrors, setsignupErrors] = useState("");
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  function onCheckboxChange(e) {
    if (e.target.checked) {
      setformData({ ...formData, [e.target.name]: true });
    } else {
      setformData({ ...formData, [e.target.name]: false });
    }
  }
  async function handleSignUp(e) {
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "please enter your first name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "please enter your last name");
    (formData.emailAddress === undefined || formData.emailAddress === "") &&
      (errors.email = "please enter your email");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "please enter your phone number");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "please enter your password");

    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);

    // Connect to database
    const url = "https://chowfarm-api.onrender.com/api/auth/signup";
    // const url = "http://localhost:8000/api/auth/signup";
    setLoading(true)
    const response = fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
         setLoading(false)
        if (data.error) {
          data.error.map((err) => {
            return setFormError(err.msg);
          });
          window.scrollTo(0, 0);
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

     
    // console.log(response)
  }

  return (
    <>
      <Nav />
      {loading && <Loader />}

      <div className="gap-12">
        <div className="pt-[4em]">
          <h1 className="text-5xl font-bold text-center text-white mb-4">
            Create An Account
          </h1>
          {formError && (
            <p className="text-red-500 capitalize text-center">{formError}</p>
          )}
          {signupErrors !== "" && (
            <p className="text-red-500 capitalize text-center">
              {signupErrors}
            </p>
          )}

          <div className="container mx-auto">
            <div className="flex container text-center">
              <div className="w-[50%]">
                {formErrors.lastName && (
                  <p className="text-red-500 text-center">
                    {formErrors.firstName}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="First Name"
                  className="w-[100%] outline-none rounded-md  border-2 p-5 my-3 "
                  name="firstName"
                  value={formData.firstName}
                />

                {formErrors.lastName && (
                  <p className="text-red-500 text-center">
                    {formErrors.lastName}
                  </p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Last Name"
                  className="w-[100%] outline-none rounded-md border-2 p-5 my-3"
                  name="lastName"
                  value={formData.lastName}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-center">{formErrors.email}</p>
                )}
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Email Address"
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="emailAddress"
                  value={formData.emailAddress}
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
                  className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  name="phoneNumber"
                  value={formData.phoneNumber}
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
                    value={formData.password}
                    className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  />
                </div>

                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-center">
                    {formErrors.confirmPassword}
                  </p>
                )}
                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    className="outline-none rounded-md border-2 p-5 w-[100%] my-3"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    name="isFarmer"
                    onChange={(e) => onCheckboxChange(e)}
                  />
                  <p>Register as a farmer</p>
                </div>
                <button
                  className="rounded-md text-white text-2xl font-bold w-[100%] my-10 bg-green-500 p-5 items-center "
                  onClick={(e) => handleSignUp(e)}
                >
                  Create Account
                </button>
              </div>
              <div className="flex-1 bg-[url('assets/images/cont.jpeg')] w-[100%] h-[70vh]  bg-no-repeat  bg-cover  "></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
