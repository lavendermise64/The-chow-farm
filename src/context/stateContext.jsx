import { createContext } from "react";
import { useState } from "react";

export const StateContext = createContext();

function StateProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState("summary");

  return (
    <StateContext.Provider value={{ cart, setCart, selected, setSelected }}>
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
