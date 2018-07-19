import React, { Component } from "react";

class NoteDetail extends Component {
  render() {
    return (
      <div className="note-detail">
        <h2>Note Title</h2>
        <p>Time Edited</p>
        <textarea>Note body</textarea>
      </div>
    );
  }
}

export default NoteDetail;
