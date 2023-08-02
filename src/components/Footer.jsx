
function Footer() {
  return (
    <div className="flex justify-between bg-gray-200">
      <div>
       <div>
        <img src={`src/assets/images/logo.png`} width={80} />
      </div>
        {/* social links */}
        <div  className="flex gap-3 my-20">
      <div>
        <img src={`src/assets/images/twitter.png`} width={25} />
      </div>
      <div>
        <img src={`src/assets/images/email.png`} width={25} />
      </div>
      <div>
        <img src={`src/assets/images/facebook.png`} width={25} />
      </div>
      <div>
        <img src={`src/assets/images/instagram.png`} width={25} />
      </div>
    </div>
    </div>
    {/* quick links */}
    <div>
        <h2 className="my-4 text-2xl">Quick links</h2>
        <ul className="text-1xl">
        <li>Home</li>
        <li>Shop</li>
        <li>Sign-Up</li>
        <li>Contact-Us</li>
        <li>Order</li>
        <li>Cart</li>
        </ul>
    </div>
    {/* partnerships */}
    <div>
      <h1 className="my-4 text-2xl">Partnerships</h1>
      <ul className="text-1xl">
      <li>Azzavi Foods</li>
      <li>Wise preneurs Africa</li>
      <li>Fresh Farms</li>
      <li>Wachapakazi Food company</li>
      <li>RackSystem Company</li>
      </ul>
    </div>
    </div>
  );
}
export default Footer;
