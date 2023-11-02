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
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
