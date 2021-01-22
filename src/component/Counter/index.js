import React, { Component } from "react";

export default class index extends Component {
  state = {
    toggle: false,
    count: 0,
  };

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle.bind(this)}>Toggle</button>
        {this.state.toggle ? (
          <div>
            <button onClick={this.handleIncrement.bind(this)}>+</button>
            <div>{this.state.count}</div>
            <button onClick={this.handleDecrement.bind(this)}>-</button>
          </div>
        ) : null}
      </div>
    );
  }
}
