import React, { Component } from "react";
import { connect } from "react-redux";
import NoteItem from "./NoteItem";
import * as actions from "../actions";

class NotesList extends Component {
  handleClick(id) {
    this.props.selectNote(id);
  }

  render() {
    console.log();
    const noteItems = this.props.notesList.map(note => {
      const { id, title, edited } = note;
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

    return <ul>{noteItems}</ul>;
  }
}

const mapStateToProps = state => {
  return {
    notesList: state.notes.notesList,
    selectedNote: state.notes.selectedNote
  };
};

export default connect(
  mapStateToProps,
  actions
)(NotesList);
