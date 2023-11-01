import log from "../assets/images/login.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import { app } from "../firebase";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function Login() {
  const [formData, setformData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [currentUser, setcurrentUser] = useState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleLogin(e) {
    const errors = {};
    (formData.emailAddress === undefined || formData.emailAddress === "") &&
      (errors.emailAddress = "please enter your email address");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "please enter your password");

    setFormErrors(errors);

    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);

    //login authentication
    const url = "https://chowfarm-api.onrender.com/api/auth/signin";

    setLoading(true);

    const response = fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // Store user to local storage

        const { token, ...others } = data;
        setLoading(false);

        if (data.emailAddress) {
          localStorage.setItem("user", JSON.stringify({ ...others }));

          data.isFarmer ? navigate("/dashboard") : navigate("/shop");
        }
      });
  }

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="">
      <Nav />
      {loading && <Loader />}

      <div className="pt[4em] flex w-[]">
        <div className="flex-1">
          <div className=" ">
            <h2 className=" text-center text-5xl font-bold text-white py-4 my-11">
              Log In
            </h2>
          </div>
          <div className="flex-1 container my-7">
            {formErrors.emailAddress && (
              <p className="text-red-500 text-center">
                {formErrors.emailAddress}
              </p>
            )}
            <div className=" flex justify-center">
              <input
                onChange={(e) => handleChange(e)}
                type="emailAddress"
                placeholder="emailAddress Address"
                className="outline-none rounded-md border-2 p-5 w-[95%] my-5"
                name="emailAddress"
                value={formData.emailAddress}
              />
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-center">{formErrors.password}</p>
            )}
            <div className=" flex justify-center">
              <input
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder=" password"
                className="outline-none rounded-md border-2 p-5 w-[95%] my-5"
                name="password"
                value={formData.password}
              />
            </div>

            <div onClick={(e) => Login(e)} className=" flex justify-center">
              <button
                className="rounded-md text-white text-2xl font-bold w-[50%] my-10 bg-green-500 p-5 items-center "
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[url('assets/images/log.jpeg')] h-[70vh] bg-no-repeat  bg-cover  "></div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
