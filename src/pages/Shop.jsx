import Nav from "../components/Nav";
import Shops from "../components/Shops";
import Footer from "../components/Footer";
import loader from "../assets/images/loader.gif";
import { useContext } from "react";
import { StateContext } from "../context/stateContext";

function Shop() {
  const {productsLoading, setProductsLoading} = useContext(StateContext);
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Nav />
      {productsLoading && <img className="mx-auto border-spacing-9" src={loader} />}
      <Shops />
      <Footer/>
    </div>
  );
}
export default Shop;
