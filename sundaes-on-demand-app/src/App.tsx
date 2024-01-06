import React from "react";
import "./App.css";
import OrderEntry from "./components/OrderEntry";

function App(): React.ReactElement {
  return (
    <div className="App bg-gray-100 h-screen w-screen">
      <h1>Sundaes on Demand</h1>
      <OrderEntry />
    </div>
  );
}

export default App;
