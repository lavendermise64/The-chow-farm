import { createContext } from "react";
import { useState } from "react";

export const StateContext = createContext();

function StateProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <StateContext.Provider value={{ cart, setCart }}>
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
