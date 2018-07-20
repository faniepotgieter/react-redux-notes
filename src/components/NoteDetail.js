import React, { Component } from "react";
import { connect } from "react-redux";
import { getLongDate } from "../utils";

class NoteDetail extends Component {
  render() {
    const { body, edited } = this.props.note;
    return (
      <div className="note-detail">
        <hr />
        <p>{getLongDate(edited)}</p>
        <textarea value={body} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { note: state.notes.byId[state.selectedNote] };
};

export default connect(mapStateToProps)(NoteDetail);
