import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <button onClick={() => this.props.newNote()}>new note</button>
        <button>delete note</button>
        <input type="text" placeholder="search notes" />
      </nav>
    );
  }
}

export default connect(
  null,
  actions
)(Menu);
