import Nav from "./Nav";
import pe from "../assets/images/pe.png";
import mise from "../assets/images/mise.png"
import falsy from "../assets/images/falsy.png"
function Aboutuspage() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-6 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0.5)),url('assets/images/pe.png')] bg-no-repeat bg-right-top bg-cover h-[70vh]">

        <h2 className="text-white font-bold text-7xl">About Us</h2>
      </div>
        <p className="text-black font-bold text-2xl py-5 flex text-center container mx-auto">The Chow farm company was mainly started top decrease food shortage in the society because of love we have towards our people .We seel food crop that are affordable and stomach friendly .We are lacoted in Kiambu county but we do deliveries across the country .Our company was started decades ago due to the rate at which living standards were rising .Despite the rate per which the economy is rising.We gat you as the Chow Farm .Together in All Sessions</p>

      <h1 className="flex justify-center text-2xl font-bold my-4">Our Team</h1>
      <div className="flex items-center gap-6 container mx-auto">
        <div className="flex-1 border-2 p-6"><img src={mise} alt="" width={325} />
        <p>
                This is a lady of substance having
                10years experience she offers the coolest services
                We are proud of her in this company
              </p>
        </div>

         <div className="flex-1 border-2 p-6"><img src={falsy} alt=""  />
        <p>
                This is a Gentleman of substance having
                10years experience she offers the coolest services
                We are proud of her in this company
              </p>
        </div>
        </div>
    </div>
  );
}
export default Aboutuspage;
