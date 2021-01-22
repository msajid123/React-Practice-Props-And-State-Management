import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from './component/Header'
import Slide from "./component/NewSlider";
import ProductList from "./component/Products/ProductList";
import Product from "./component/Products/Product";
import Counter from "./component/Counter";

function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <Slide /> */}
      <Product />
      <Counter />
    </div>
  );
}

export default App;
