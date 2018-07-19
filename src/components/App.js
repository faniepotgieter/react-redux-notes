import React, { Component } from "react";
import NotesList from "./NotesList";
import Menu from "./Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <NotesList />
      </div>
    );
  }
}

export default App;
