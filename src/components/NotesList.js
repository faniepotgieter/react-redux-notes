import React, { Component } from "react";
import { connect } from "react-redux";
import NoteItem from "./NoteItem";
import * as actions from "../actions";

class NotesList extends Component {
  handleClick(id) {
    this.props.selectNote(id);
  }

  render() {
    let notes = this.props.notes;

    const noteItems = Object.keys(notes).map((key, index) => {
      const { id, title, edited } = notes[key];
      const selected = this.props.selectedNote === id;

      return (
        <NoteItem
          key={id}
          id={id}
          title={title}
          edited={edited}
          selected={selected}
          handleClick={this.handleClick.bind(this)}
        />
      );
    });

    return <ul className="notes-list">{noteItems}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.byId,
    selectedNote: state.selectedNote
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesList);
