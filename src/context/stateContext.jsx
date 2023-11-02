import { createContext } from "react";
import { useState } from "react";

export const StateContext = createContext();

function StateProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState("summary");
  const [currentUser, setCurrentUser] = useState(null);
  const [userProducts, setUserProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const[productsLoading,setProductsLoading]=useState(false)


  const [count, setCount] = useState(() => {
    if (JSON.parse(localStorage.getItem("count"))) {
      return JSON.parse(localStorage.getItem("count"));
    } else {
      return JSON.parse(localStorage.getItem("cart"));
    }
  });

  return (
    <StateContext.Provider
      value={{
        cart,
        setCart,
        selected,
        setSelected,
        currentUser,
        setCurrentUser,
        userProducts,
        setUserProducts,
        showModal,
        setShowModal,
        selectedProduct,
        setSelectedProduct,
        count,
        setCount,
        productsLoading,
        setProductsLoading
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
