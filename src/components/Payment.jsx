import Nav from "./Nav";
import Footer from "./Footer";
function Payment() {


  return (
    <div>
        <Nav/>
      <div className="bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/pay.jpg')] bg-no-repeat h-[70vh] w-[100%] bg-center bg-cover">
      <div className="container mx-auto">
        <h1 className="text-center text-green-500 text-6xl" >Check-out your basket!</h1>
    
        <div className=" font-bold  mt-10 border-2 w-[600px] h-[300px] mx-auto text-2xl bg-gray-200">
        <h4 className="text-center">Mpesa paybill</h4>
        <p className="text-green-500 text-center">(21505079)</p>
        <h4 className="text-center">Account number(Equity)</h4>
        <p className="text-green-500 text-center">(141435267)</p>
        <h4 className="text-center">Account number(KCB)</h4>
        <p className="text-green-500 text-center">(5643427728)</p>
        <h4 className="text-green-800 mt-4 text-center">Pay pals are also accepted</h4>
        </div>
      <h2 className="text-center text-4xl mt-4 text-green-500">Thank you for staying connected with Us. </h2>
      
      </div>
      </div>
      <Footer/>                                 
    </div>
  );
}
export default Payment;
