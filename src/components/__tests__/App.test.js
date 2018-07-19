import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Root from "../../Root";
import App from "../App";
import Menu from "../Menu";
import NotesList from "../NotesList";
import NoteDetail from "../NoteDetail";

let initialState = {};
let wrapper;

describe("App", () => {
  beforeEach(() => {
    wrapper = mount(
      <Root initialState={initialState}>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Root initialState={initialState}>
        <App />
      </Root>,
      div
    );
  });

  it("contains a Menu component", () => {
    expect(wrapper.find(Menu).length).toEqual(1);
  });

  it("contains a NotesList component", () => {
    expect(wrapper.find(NotesList).length).toEqual(1);
  });

  it("contains a NoteDetail component", () => {
    expect(wrapper.find(NoteDetail).length).toEqual(1);
  });
});
