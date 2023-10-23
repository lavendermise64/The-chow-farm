import Nav from "./Nav";
import Orders from "./Orders";
import Summary from "./Summary";
import Stock from "./Stock";
import {BsFillClipboardDataFill,BsFillBoxSeamFill,BsCardList,} from "react-icons/bs";
import { useContext} from "react";
import { StateContext } from "../context/stateContext";

function Farmersdasboard() {
  const { selected,setSelected} = useContext(StateContext);

  const handleMenuClick = (e, item) => {
    if (e.target.textContent.toLowerCase() === item) {
      setSelected(item);
    }
  };

  const renderDashboards = () => {
    if (selected === "summary") {
      return <Summary />;
    } else if (selected === "orders") {
      return <Orders />;
    } else if (selected === "stock") {
      return <Stock />;
    }
  };
  return (
    <div className="">
      <Nav />
      {console.log(selected)}
      <div className="flex container mx-auto">
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
    </div>
  );
}
export default Farmersdasboard;
