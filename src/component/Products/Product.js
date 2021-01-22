import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Product extends Component {
  state = {
    products: [
      {
        title: "Hello",
        sDesc: "Abc...",
        Price: 5000,
        imgUrl: "",
      },
      {
        title: "Adnan",
        Desc: "Abc...",
        Price: 5000,
        imgUrl: "",
      },
      {
        title: "Sajid",
        Desc: "Abc...",
        Price: 5000,
        imgUrl: "",
      },
      {
        title: "Imran",
        Desc: "Abc...",
        Price: 5000,
        imgUrl: "",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.products.map((val, index) => {
          return (
            <ProductList
              //   key={`${index}asdfa`}
              //   key={index + "hello"}
              key={index}
              title={val.title}
              Desc={val.Desc}
              Price={val.Price}
              imgUrl={val.imgUrl}
            />
          );
        })}
      </div>
    );
  }
}
