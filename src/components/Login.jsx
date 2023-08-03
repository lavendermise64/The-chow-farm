import log from "../assets/images/login.png";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [currentUser, setcurrentUser] = useState();
  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  function Login(e) {
    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "please enter your email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "please enter your password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "please enter your confirm password");
    setFormErrors(errors);

    setFormErrors(errors);
    console.log(errors);
    e.preventDefault();
    console.log(formData);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setformData({
          password:"",
          confirmPassword:"",
          email:""

        })
        navigate("/shop");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div>
      <Nav />
      <div className="pt[4em]">
        <div className=" bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0.5)),url('assets/images/log.png')] bg-no-repeat bg-right-top bg-cover h-[100vh] w-[100%]">
          <div className=" container mx-auto">
            <div className=" ">
            <h2 className=" text-center text-5xl font-bold text-white py-4 my-11">
              Log In
            </h2>
            </div>
            <div className=" container mx-auto  w-[100%] my-8">
              {formErrors.email && (
                <p className="text-red-500 text-center">{formErrors.email}</p>
              )}
              <div className=" flex justify-center">
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Email Address"
                  className="outline-none rounded-md border-2 p-5 w-[50%] my-5 border-green-500"
                  name="email"
                  value={formData.email}
                />
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-center">
                  {formErrors.password}
                </p>
              )}
              <div className=" flex justify-center">
                <input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  placeholder=" password"
                  className="outline-none rounded-md border-2 p-5 w-[50%] my-5 border-green-500"
                  name="password"
                  value={formData.password}
                />
              </div>

              {formErrors.confirmPassword && (
                <p className="text-red-500 text-center">
                  {formErrors.confirmPassword}
                </p>
              )}
              <div className=" flex justify-center">
                <input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  placeholder="Confirm Password"
                  className="outline-none rounded-md border-2 p-5 w-[50%] my-5 border-green-500"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                />
                </div>
                <div onClick={(e) => Login(e)} className=" flex justify-center">
                  <button className=" p-5 rounded-full border-2  text-white shadow text-center bg-green-500 mx-auto w-[20%] my-4">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    
  );
}
export default Login;
