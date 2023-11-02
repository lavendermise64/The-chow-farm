import home from "../assets/images/home.jpeg";
import SweetPotato from "../assets/images/ngwashe.jpeg";
import Tomatoes from "../assets/images/nyanya.jpeg";
import Coriander from "../assets/images/dania.jpeg";
import BellPepper from "../assets/images/hoho.jpeg";
import Featured from "./Featured";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div >
      <div className="bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/om.jpeg')] bg-no-repeat h-[70vh] w-[100%] bg-center bg-cover">
        <div className="flex flex-col items-center h-[100%] justify-center">
          <h1 className="text-green-500 text-6xl">THE CHOW FARM </h1>
          <p className="text-white text-2xl">Together in all seasons</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-4xl text-center my-10 text-green-500">Our story</h2>
        <p className="text-black   justify-center text-1.9xl p-1 my-4">
          We care for your health by eradicting hunger.We are together in making
          our living standards better.We market high quality goods which are
          fresh and directly from our farms. The healthier you eat healthy meals
          the higher you incease your life span lets eat healthy to live long.We
          hearby link producers and consumers through the chow-farm. The
          chowfarm helps to save each of their time through online marketing
        </p>
        <Link to="/about">
          <p className=" text-center underline-offset-8 underline text-2xl mb-9">
            Read more
          </p>
        </Link>
      </div>
      <Featured />
    </div>
  );
}
export default Hero;
