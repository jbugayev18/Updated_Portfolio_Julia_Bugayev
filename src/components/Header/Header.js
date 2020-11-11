import React, { Component } from "react";

import Lead from "./Lead";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_class: "",
    };
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled",
      });
    }
  };

  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`;
    return (
      <header>
        <div className={top_menu_class}>
          <Lead text="<Julia Bugayev/>" />
          
        </div>
      </header>
    );
  };
}
