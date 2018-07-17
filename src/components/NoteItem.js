import React from "react";
import "../css/NoteItem.css";

const NoteItem = props => {
  const { id, title, edited, selected, handleClick } = props;
  const classNames = `note-item ${selected ? "selected" : ""}`;

  return (
    <li className={classNames} onClick={() => handleClick(id)}>
      <div>{title}</div>
      <div>{JSON.stringify(edited)}</div>
    </li>
  );
};

export default NoteItem;
