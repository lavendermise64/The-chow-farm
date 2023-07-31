import Nav from "../components/Nav";
import Shops from "../components/Shops";
import BokChoy from "../assets/images/bok.jpeg";
import Cabbage from "../assets/images/cabagge.jpeg";
import Coriander from "../assets/images/dania.jpeg";
import Fenugreek from "../assets/images/fenu.jpeg";
import BellPepper from "../assets/images/hoho.jpeg";
import Peas from "../assets/images/minji.jpeg";
import Cassava from "../assets/images/mogo.jpeg";
import Yams from "../assets/images/nduma.jpeg";
import SweetPotato from "../assets/images/ngwashe.jpeg";
import Tomatoes from "../assets/images/nyanya.jpeg";
import Onions from "../assets/images/onion.jpeg";
import Radishes from "../assets/images/radi.jpeg";
import Garlic from "../assets/images/saumu.jpeg";
import Kales from "../assets/images/skuma.jpeg";
import Soybeans from "../assets/images/soy.jpeg";
import IrishPotato from "../assets/images/waru.jpeg";
import Footer from "../components/Footer";
function Shop() {
  return (
    <div>
      <Nav />
      <div className="">
      <Shops/>
      {/* <Shops icon={Cabbage} category="Cabbage"/>
      <Shops icon={Coriander} category="Coriander"/>
      <Shops icon={Fenugreek} category="Fenugreek"/>
      <Shops icon={BellPepper} category="Bellpepper"/>
      <Shops icon={Peas} category="Peas"/>
      <Shops icon={Cassava} category="Cassava"/>
      <Shops icon={Yams} category="Yams"/>
      <Shops icon={SweetPotato} category="SweetPotato"/>
      <Shops icon={Tomatoes} category="Tomatoes"/>
      <Shops icon={Onions} category="Onions"/>
      <Shops icon={Radishes} category="Radishes"/>
      <Shops icon={Garlic} category="Garlic"/>
      <Shops icon={Kales} category="Kales"/>
      <Shops icon={IrishPotato} category="IrishPotato"/>
      <Shops icon={Soybeans} category="Soybeans"/> */}

      </div>
      <Footer/>

    </div>
  );
}
export default Shop;
