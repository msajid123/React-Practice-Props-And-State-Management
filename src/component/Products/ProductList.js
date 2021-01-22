import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    console.log(this.state);
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
