import React, { Component } from "react";
import { connect } from "react-redux";

class NotesList extends Component {
  renderNotes() {
    return this.props.notes.map(note => {
      const { title, edited } = note;

      return (
        <li>
          <div>{title}</div>
          <div>{JSON.stringify(edited)}</div>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderNotes()}</ul>;
  }
}

const mapStateToProps = state => {
  return { notes: state.notes };
};

export default connect(mapStateToProps)(NotesList);
