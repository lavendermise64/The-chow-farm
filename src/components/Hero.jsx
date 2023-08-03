import home from "../assets/images/home.jpeg";
import SweetPotato from "../assets/images/ngwashe.jpeg";
import Tomatoes from "../assets/images/nyanya.jpeg";
import Coriander from "../assets/images/dania.jpeg";
import BellPepper from "../assets/images/hoho.jpeg";
import Featured from "./Featured";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/om.jpeg')] bg-no-repeat h-[70vh] w-[100%] bg-center bg-cover">
        <div className="flex flex-col items-center h-[100%] justify-center">
          <h1 className="text-green-500 text-6xl">THE CHOW FARM </h1>
          <p className="text-white text-2xl">Together in all seasons</p>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl text-center my-16 text-green-500">Our story</h2>
        <p className="text-center text-3xl">
          We care for your health by eradicting hunger.We are together on making
          your living standards fair.We produce the best crops which offers the
          best nutrients.We are together in dealing with this stupid economy...
        </p>
        <Link to="/about">
        <p className=" text-center underline-offset-8 underline text-3xl my-16">Read more</p>
        </Link>
      </div>
      <Featured/>
     
    </>
  );
}
export default Hero;
