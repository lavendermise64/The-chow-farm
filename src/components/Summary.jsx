import Stat from "./Stat";
import Sales from "./Sales";
import { useContext } from "react";
import { StateContext } from "../context/stateContext";

function Summary() {
  const { selected,setSelected} = useContext(StateContext);

  const handleProductsClick = () => {
    setSelected("stock")
  };
  const handleOutOfStockClick = () => {
    alert("Out of Stock");
  };

  const handleAlmostOutOfStockClick = () => {
    alert("Almost out of stock");
  };
  return (
    <div>
      <h2 className="flex justify-center p-3">Products</h2>
      <div className="flex justify-center gap-10">
        <Stat
          stat="20"
          statText="Total Products"
          statColor="text-orange-500"
          clickEvent={handleProductsClick}
        />
        <Stat
          stat="0"
          statText="Out of Stock"
          statColor="text-red-500"
          clickEvent={handleOutOfStockClick}
        />
        <Stat
          stat="10"
          statText="Almost out of stock"
          statColor="text-purple-500"
          clickEvent={handleAlmostOutOfStockClick}
        />
      </div>
      <h2 className="flex justify-center p-3">Sales</h2>
      <div  className="flex justify-center gap-10">
        
        <Sales
        sales="Kshs. 5000"
        salesText="this week"
        salesColor="text-blue-950" 
          />
      
        <Sales 
        sales="Kshs. 1000"
        salesText="today"
        salesColor="text-blue-950"
        />
        <Sales
                sales="P & L"
                salesText="progress"
                salesColor="text-blue-950"
                className="bg-blue-700"
        />
      </div>
    </div>
  );
}

export default Summary;
