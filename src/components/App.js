import React, { Component } from "react";
import NotesList from "./NotesList";
import Menu from "./Menu";
import NoteDetail from "./NoteDetail";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <NotesList />
        <NoteDetail />
      </div>
    );
  }
}

export default App;
