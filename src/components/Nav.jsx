
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className=" bg-gray-400">
      <div className=" container mx-auto flex justify-between items-center capitalize">
        <div>
          <ul className="ul flex justify-between gap-5 items-center py-4">
            <Link to="/home">
              <img src={logo} alt="chow farm  logo " width={150} />
            </Link>
            <Link to="/">
              <li> Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="ul flex justify-between gap-5 items-center py-4">
            <Link to="/signup">
              <li>Sign-Up</li>
            </Link>
            <Link to="/contactus">
              <li>Contact-Us</li>
            </Link>
            <Link to="/order">
              <li>Order</li>
            </Link>

          </ul>
        </div>
      </div>
    </div>
  );
}
export default Nav;
