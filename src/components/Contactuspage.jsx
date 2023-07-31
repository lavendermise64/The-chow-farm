import Nav from "./Nav";
import contact from "../assets/images/contact.svg";
function Contactuspage() {
  return (
    <div className="">
      <Nav />
      <h2 className="text-5xl text-center font-bold">Reach Us Through</h2>
      <div className="flex">
        <div className="flex-1 container w[100%] my-7">
          <div>
            <input
              placeholder="Enter your name"
              className="w-[70%] mx-6 outline-none contain border-2 border-green-500 p-5 my-2"
              type="text"
            />
          </div>
          <div>
            <input
              placeholder="Enter your email"
              className="w-[70%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              type="email"
            />
          </div>
          <div>
            <input
              placeholder="Enter the subject"
              className="w-[70%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              type="text"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              className="w-[70%] mx-6 outline-none contain border-2  border-green-500 p-5 my-2"
              rows="15"
              cols="5"
            ></textarea>
          </div>
          <div>
            <div className="flex">
          <button className="py-2 px-9 rounded-full border-2 border-grey  border-green-500 text-black shadow-1md text-center">
              Submit
            </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[url('assets/images/contact.svg')] bg-no-repeat bg-right-top bg-contain"></div>
      </div>
    </div>
  );
}
export default Contactuspage;
