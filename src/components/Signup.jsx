// import google from "../assets/images/google.png";
import Nav from "./Nav";
function Signup(){
    return(
        <div className=" mx-auto bg-green-500">
          <Nav/>
<h1 className="text-4xl font-bold text-center">Create An Account</h1>
<input
    
              type="text"
              placeholder="First Name"
              className="w-[40%] mx-6 outline-none rounded-full border-2 p-5"
              name="firstName"
              />
                <input
            
              type="text"
              placeholder="Last Name"
              className="w-[40%] outline-none rounded-full border-2 p-5 my-5"
              name="lastName"
            />
             <input
              type="email"
              placeholder="Email Address"
              className="outline-none rounded-full border-2 p-5 w-[80%] my-5"
              name="emailAddress"
            />
             <input
    
              type="number"
              placeholder="Phone Number"
              className="outline-none rounded-full border-2 p-5 w-[80%] my-5"
              name="phoneNumber"
            />
            <div className="outline-none rounded-full border-2 p-5 w-[80%] my-5 flex justify-between">
             <input
            
    
                placeholder="Password"
                name="password"
              />
              </div>
              <div className="outline-none rounded-full border-2 p-5 w-[80%] my-5 flex justify-between">
            
              
              <input
                  
                
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
              </div>
              <button
              className="text-white text-2xl font-bold"
        
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
    )
}
export default Signup;