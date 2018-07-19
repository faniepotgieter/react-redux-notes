import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <button>new note</button>
        <button>delete note</button>
        <input type="text" placeholder="search notes" />
      </nav>
    );
  }
}

export default Menu;
