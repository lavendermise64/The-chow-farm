import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="flex justify-between bg-gray-500">
      <div className=" container mx-auto flex  justify-between">
        <div className="mt-12">
          {/* <div>
        <img src={`src/assets/images/logo.png`} width={90} />
      </div> */}

          <div className="flex gap-3 my-20">
            <div>
              <AiFillTwitterSquare size="50"/>
            </div>
            <div>
              <AiOutlineMail size="50"/>
            </div>
            <div>
              <AiOutlineFacebook size="50" />
            </div>
            <div>
              <AiOutlineInstagram  size="50"/>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="my-4 text-3xl">Quick links</h2>
          <ul className="text-2xl text-white">
            <li>Home</li>
            <li>Shop</li>
            <li>Sign-Up</li>
            <li>Contact-Us</li>
            <li>Order</li>
            <li>Cart</li>
          </ul>
        </div>

        <div>
          <h1 className="my-4 text-3xl">Partnerships</h1>
          <ul className="text-2xl text-white">
            <li>Azzavi Foods</li>
            <li>Wise preneurs Africa</li>
            <li>Fresh Farms</li>
            <li>Wachapakazi Food company</li>
            <li>RackSystem Company</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
