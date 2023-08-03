
function Footer() {
  return (
    <div className="flex justify-between bg-green-500 ">
      <div  className=" container mx-auto flex  justify-between">
      <div>
       <div>
        <img src={`src/assets/images/logo.png`} width={90} />
      </div>
      
        <div  className="flex gap-3 my-20">
      <div>
        <img src={`src/assets/images/twitter.png`} width={50} />
      </div>
      <div>
        <img src={`src/assets/images/email.png`} width={50} />
      </div>
      <div>
        <img src={`src/assets/images/facebook.png`} width={50} />
      </div>
      <div>
        <img src={`src/assets/images/instagram.png`} width={50} />
      </div>
    </div>
    </div>
    <div className="">
        <h2 className="my-4 text-2xl">Quick links</h2>
        <ul className="text-2xl">
        <li>Home</li>
        <li>Shop</li>
        <li>Sign-Up</li>
        <li>Contact-Us</li>
        <li>Order</li>
        <li>Cart</li>
        </ul>
    </div>
    
    <div>
      <h1 className="my-4 text-2xl">Partnerships</h1>
      <ul className="text-2xl">
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
