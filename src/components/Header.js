import React, { Component } from "react";
import img from "./logobg-modified.png";
export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <img alt="serdar budak" src={img} width="80" className="mb-4" />

          <h1 className="display-4">Background Removal Tool</h1>
          {/* <p className="lead mb-0">Fast, simple and great performance.</p> */}
          <p className="lead mb-0">Background Fades, Memories Stays!</p>
        </header>
      </div>
    );
  }
}
