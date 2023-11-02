import Stat from "./Stat";
import Sales from "./Sales";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/stateContext";


function Summary({ currentUser, products }) {
  const { selected, setSelected } = useContext(StateContext);
  const { userProducts, setUserProducts } = useContext(StateContext);

  useEffect(() => {
    products &&
      products.filter(
        (product) =>
          product.uid === currentUser._id &&
          setUserProducts((prev) => [...prev, product])
      );
  }, [products]);
  const handleProductsClick = () => {
    setSelected("stock");
  };
  const handleOutOfStockClick = () => {
    alert("Out of Stock");
  };

  const handleAlmostOutOfStockClick = () => {
    alert("Almost out of stock");
  };

  return (
    <div className="">
      
      {console.log(userProducts)}
      <h2 className="flex justify-center p-5">Products</h2>
      <div className="flex justify-center gap-10 p-4 w-[80vw]h-[80vh] ">
        <Stat
          stat={userProducts.length}
          statText="Total Products"
          statColor="text-orange-500"
          clickEvent={handleProductsClick}
        />
        <Stat
          stat={
            userProducts &&
            userProducts.filter((product) => parseInt(product.stock) === 0)
              .length
          }
          statText="Out of Stock"
          statColor="text-red-500"
          clickEvent={handleOutOfStockClick}
        />
        <Stat
          stat={
            userProducts &&
            userProducts.filter(
              (product) =>
                parseInt(product.stock) <= 5 && parseInt(product.stock) > 0
            ).length
          }
          statText="Almost out of stock"
          statColor="text-purple-500"
          clickEvent={handleAlmostOutOfStockClick}
        />
      </div>
      <h2 className="flex justify-center p-4">Sales</h2>
      <div className="flex justify-center gap-10 items-center text-center w-[70vw] ">
        <Sales
          stat="Kshs. 5000"
          statText="this week"
          statColor="text-blue-950"
        />

        <Sales stat="Kshs. 1000" statText="today" salesColor="text-green-500" />
        <Sales stat="P & L" statText="progress" salesColor="text-blue-950" />
      </div>
    </div>
  );
}

export default Summary;
