import home from "../assets/images/home.jpeg";
function Hero() {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/om.jpeg')] bg-no-repeat h-[70vh] w-[100%] bg-center bg-cover">
      <div className="flex flex-col items-center h-[100%] justify-center">
        <h1 className="text-green-500 text-6xl">THE CHOW FARM </h1>
        <p className="text-white">Together in all seasons</p>
      </div>
      <div className="">

      <h2 className="text-4xl text-center">Our story</h2>
      <p className="text-center">We care for your health by eradicting hunger.We are together on making your living standards fair.We produce the best crops which offers the best nutrients.We are together in dealing with this stupid economy...</p>
      <p className=" text-center underline-offset-8 underline">Read more</p>
      </div>
    </div>
  );
}
export default Hero;