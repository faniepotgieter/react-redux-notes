import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <button onClick={() => this.props.newNote()}>new note</button>
        <button
          onClick={() => {
            this.props.deleteNote(this.props.noteId);
          }}
        >
          delete note
        </button>
        <input type="text" placeholder="search notes" />
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { noteId: state.selectedNote };
};

export default connect(
  mapStateToProps,
  actions
)(Menu);
