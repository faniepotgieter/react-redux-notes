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
      <div className="note-item__title">{formattedTitle}</div>
      <div className="note-item__date">{edited}</div>
    </li>
  );
};

export default NoteItem;
