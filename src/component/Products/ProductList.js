import React, { Component } from "react";

export default class ProductList extends Component {
  //   state = {
  //     title: "Hello",
  //     Desc: "Abc...",
  //     Price: 5000,
  //     imgUrl: "",
  //   };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.Desc}</p>
        <h3>{this.props.Price}</h3>
        <img src={this.props.imgUrl} alt="Foo eating a sandwich." />
      </div>
    );
  }
}
