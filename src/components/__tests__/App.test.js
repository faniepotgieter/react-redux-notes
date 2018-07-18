import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Root from "../../Root";
import App from "../App";
import NotesList from "../NotesList";

describe("App", () => {
  it("renders without crashing", () => {
    const initialState = {};
    const div = document.createElement("div");
    ReactDOM.render(
      <Root initialState={initialState}>
        <App />
      </Root>,
      div
    );
  });

  it("contains a notes list", () => {
    const initialState = {};

    const wrapper = mount(
      <Root initialState={initialState}>
        <App />
      </Root>
    );
    expect(wrapper.find(NotesList).length).toEqual(1);
  });
});
