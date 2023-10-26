import { Link } from "react-router-dom";
import {
  AiOutlineMail,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
function Footer() {
  return (
    <div className="flex justify-between bg-green-500">
      <div className=" container mx-auto flex  justify-between">
        <div className="mt-12">
          {/* <div>
        <img src={`src/assets/images/logo.png`} width={90} />
      </div> */}

          <div className="flex gap-3 my-20">
            <div>
              <AiFillTwitterSquare size="25"/>
            </div>
            <div>
              <AiOutlineMail size="25"/>
            </div>
            <div>
              <AiOutlineFacebook size="25" />
            </div>
            <div>
              <AiOutlineInstagram  size="25"/>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="my-4 text-2xl">Quick links</h2>
          <ul className=" text-white">
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/shop">
            <li>Shop</li>
            </Link>
            <Link to="/signup">
            <li>Sign-Up</li>
            </Link>
            <Link to="/contactus">
            <li>Contact-Us</li>
            </Link>
            <Link to="/login">
            <li>Login</li>
            </Link>
            <Link to="/cart">
            <li>Cart</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="my-4 text-2xl">Partnerships</h1>
          <ul className=" text-white">
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
