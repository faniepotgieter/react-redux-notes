import React from "react";
import "../css/NoteItem.css";

const NoteItem = props => {
  const { id, title, edited, selected, handleClick } = props;
  const classNames = `note-item ${selected ? "selected" : ""}`;
  let formattedTitle = title;

  if (title.length > 20) {
    formattedTitle = title.slice(0, 20) + "...";
  }

  return (
    <li className={classNames} onClick={() => handleClick(id)}>
      <div>{formattedTitle}</div>
      <div>{edited}</div>
    </li>
  );
};

export default NoteItem;
