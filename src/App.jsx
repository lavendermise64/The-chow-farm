import Router from "./components/Router";
import StateProvider from "./context/stateContext";

export default function App() {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
}
