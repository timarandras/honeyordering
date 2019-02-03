import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { HoneyList } from "./HoneyList";
import { Cart } from "./Cart";
import { CartContext } from "./CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <h1>Honey Ordering</h1>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <HoneyList />
        <Cart />
      </CartContext.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
