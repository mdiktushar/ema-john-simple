import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/header";
import Shop from "./components/shop/shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
