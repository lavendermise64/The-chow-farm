import Nav from "./Nav";
import pe from "../assets/images/pe.png";
import mise from "../assets/images/mise.png";
import falsy from "../assets/images/falsy.png";
import cont from "../assets/images/about.jpeg";
function Aboutuspage() {
  return (
    <div className="container mx-auto">
      <h2 className="text-center flex justify-center text-6xl text-green-500">
        Chow-Farm Fratanity
      </h2>
      <div className="flex flex-1 justify-between">
        <div className="w-[50%]">
          <p className="text-black  t justify-center text-2xl py-5 my-9">
            The Chow farm company was mainly started to help the local farmers
            market there products. It also helps the consumers to easily access
            there needs without much struggle.The prices offered are affordable
            to our consumers. One is able to get high quality goods since we gat
            you covered and no frauds in the business.The chow farm company is
            together with you in all seasons to eradicate hunger.
          </p>
        </div>
        <div className="flex-1 p-6 w-[50%]">
          <img src={cont} alt="" />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="border-2 w-[30%] mb-6 h-[30vh]">
          <h2 className="text-center text-3xl font-bold  text-green-500">Mission</h2>
          <p className="text-center mt-3 text-1.5xl">
            To promote agroecological principles & rural entrepreneurships
            through capaciy and development in our country
          </p>
        </div>
        <div className="border-2 w-[30%] mb-6 h-[30vh]">
          <h2 className="text-center text-3xl font-bold text-green-500 ">Vission</h2>
          <p className="text-center mt-3 text-1.5xl">
            Improved rural livelihoods & sustainable food systems in our country
          </p>
        </div>
        <div className="border-2 w-[30%] mb-6 h-[30vh]">
          <h2 className="text-center text-3xl font-bold  text-green-500">Motto</h2>
          <p className="text-center mt-3 text-1.5xl">An industry that feeds you is an industry worth fighting for</p>
        </div>
        <div className="border-2 w-[30%] mb-6 h-[30vh]">
          <h2 className="text-center text-3xl font-bold  text-green-500">Our Values</h2>
          <ul className="m-3 mt-3 text-1.5xl">
            <li>Creative , flexible and innovative</li>
            <li>Sensitive to gender</li>
            <li>Quality equality and ethics</li>
            <li>Respect and value for local knowledge</li>
            <li>Professional effective and informed by relevant science</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Aboutuspage;
