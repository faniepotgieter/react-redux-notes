import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <button>new note</button>
        <button>delete note</button>
        <input type="text" placeholder="search notes" />
      </div>
    );
  }
}

export default Menu;
