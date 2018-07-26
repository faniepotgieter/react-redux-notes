import React, { Component } from "react";
import { connect } from "react-redux";
import { getShortDate } from "../utils";
import NoteItem from "./NoteItem";
import * as actions from "../actions";

class NotesList extends Component {
  handleClick(id) {
    this.props.selectNote(id);
  }

  render() {
    let notes = this.props.notes;

    const noteItems = Object.keys(notes).map(key => {
      const { id, body, edited } = notes[key];
      const selected = this.props.selectedNote === id;
      let title = body === "" ? "New Note" : body;
      return (
        <NoteItem
          key={id}
          id={id}
          title={title}
          edited={getShortDate(edited)}
          selected={selected}
          handleClick={this.handleClick.bind(this)}
        />
      );
    });

    return <ul className="notes-list">{noteItems}</ul>;
  }
}

const getSortedNotes = state => {
  return state.notes.allIds.map(id => state.notes.byId[id]);
};

const mapStateToProps = state => {
  return {
    notes: getSortedNotes(state),
    selectedNote: state.selectedNote
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesList);
