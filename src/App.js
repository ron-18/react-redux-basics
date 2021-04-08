import React from "react";
import Cake from "./components/Cake";
import './App.css';
import IceCream from "./components/iceCream";
import NewCake from "./components/NewCake";
import Item from "./components/Item";
import NewIceCream from "./components/NewIceCream";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <Cake />
      <IceCream />
      <NewCake />
      <NewIceCream />
      <Item item="cake"/>
      <Item item="iceCream"/>
      <br/>
      <br/>
      <UserContainer/>
    </div>
  );
}

export default App;
