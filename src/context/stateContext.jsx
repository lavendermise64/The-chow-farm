import { createContext } from "react";
import { useState } from "react";

export const StateContext = createContext();

function StateProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState("summary");
  const[currentUser,setCurrentUser]=useState(null)

  return (
    <StateContext.Provider value={{ cart, setCart, selected, setSelected ,currentUser,setCurrentUser}}>
      {children}
    </StateContext.Provider>
  );
}
export default StateProvider;
