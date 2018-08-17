import React, { Component } from "react";
import { connect } from "react-redux";
import { getLongDate } from "../utils";
import * as actions from "../actions";
import "../css/NoteDetail.css";

class NoteDetail extends Component {
  handleBodyChange(event) {
    const { id } = this.props.note;
    this.props.changeBody(id, event.target.value);
  }

  render() {
    if (!this.props.note) {
      return <div>Select a note, or add a new note.</div>;
    }
    const { body, edited } = this.props.note;

    return (
      <div className="note-detail">
        <p>{getLongDate(edited)}</p>
        <textarea onChange={this.handleBodyChange.bind(this)} value={body} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { note: state.notes.byId[state.selectedNote] };
};

export default connect(
  mapStateToProps,
  actions
)(NoteDetail);
