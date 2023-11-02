import Nav from "./Nav";
import Orders from "./Orders";
import Summary from "./Summary";
import Stock from "./Stock";
import {
  BsFillClipboardDataFill,
  BsFillBoxSeamFill,
  BsCardList,
} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/stateContext";
import Update from "./Update";
import Footer from "./Footer";
function Farmersdasboard() {
  const { selected, setSelected } = useContext(StateContext);
  const [products, setProducts] = useState([]);
  const { currentUser, setCurrentUser } = useContext(StateContext);
  const { showModal, setShowModal } = useContext(StateContext);

  useEffect(() => {
    const url = "https://chowfarm-api.onrender.com/api/posts/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    // Get user from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
  }, []);

  const handleMenuClick = (e, item) => {
    if (e.target.textContent.toLowerCase() === item) {
      setSelected(item);
    }
  };

  const renderDashboards = () => {
    if (selected === "summary") {
      return <Summary currentUser={currentUser} products={products} />;
    } else if (selected === "orders") {
      return <Orders />;
    } else if (selected === "stock") {
      return <Stock currentUser={currentUser} products={products} />;
    }
  };
  return (
    <div className="">
      { showModal && <Update />}
      <Nav />
      {/* name of the respective farmer */}
      {console.log(selected)}
      <div className="flex container mx-auto mb-8">
        <div className="w-[20%] border-2 h-[80vh]">
          <ul className="">
            <li
              onClick={(e) => handleMenuClick(e, "summary")}
              className={`p-4 cursor-pointer flex items-center gap-2 ${
                selected === "summary"
                  ? "bg-green-500 text-white font-bold"
                  : "bg-green-300"
              }`}
            >
              <BsFillClipboardDataFill />
              Summary
            </li>
            <li
              onClick={(e) => handleMenuClick(e, "stock")}
              className={`p-4 cursor-pointer flex items-center my-3 gap-2 ${
                selected === "stock"
                  ? "bg-green-500 text-white font-bold"
                  : "bg-green-300"
              }`}
            >
              <BsFillBoxSeamFill />
              Stock
            </li>
            <li
              onClick={(e) => handleMenuClick(e, "orders")}
              className={`p-4 cursor-pointer flex items-center gap-2 ${
                selected === "orders"
                  ? "bg-green-500 text-white font-bold"
                  : "bg-green-300"
              }`}
            >
              <BsCardList />
              Orders
            </li>
          </ul>
        </div>
        <div className="w-[80%] border-2">{renderDashboards()}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Farmersdasboard;
