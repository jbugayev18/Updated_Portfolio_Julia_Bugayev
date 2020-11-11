import React, { Component } from "react";

export default class Lead extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return <div className="top-menu-land">{this.text}</div>;
  }
}
